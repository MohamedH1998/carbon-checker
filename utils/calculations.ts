"use server";

import normalizeUrl from "normalize-url";
import { roundToOneDecimal } from "./helper";

const ANNUAL_INTERNET_ENGERGY = 0.81;
const MONTHS_IN_A_YEAR = 12;
const DEFAULT_MONTHLY_VISITORS = 10000;
const GIGTABYTE = 1073741824;

const KWG_PER_GB = 1.2;
const RETURNING_VISITOR_PERCENTAGE = 0.3;
const RETURNING_VISOTOR_CACHE_PERCENTAGE = 0.02;
const FIRST_TIME_VIEWING_PERCENTAGE = 0.7;
const CARBON_PER_KWG_GRID = 442;
const CARBON_PER_KWG_RENEWABLE = 50;
const PERCENTAGE_OF_ENERGY_IN_DATACENTER = 0.089;
const PERCENTAGE_OF_ENERGY_IN_TRANSMISSION_AND_END_USER = 0.8992;
const COFFEE_CONVERSION = 2.5;

const CO2_ABSORBED_BY_TREES_ANNUALLY = 22;
const GOOGLE_PAGESPEED_API_ENDPOINT =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const GREEN_FOUNDATION_API_ENDPOINT =
  "https://api.thegreenwebfoundation.org/greencheck";

function getAnnualEmissions(emissionsPerVisit: number) {
  const result =
    emissionsPerVisit * DEFAULT_MONTHLY_VISITORS * MONTHS_IN_A_YEAR;
  const transformedData = roundToOneDecimal(result) / 1000;
  return transformedData;
}
const calculateTransferredBytes = (items: IndigoItem[]) =>
  items
    .filter((item) => item.transferSize !== undefined)
    .map((item) => item.transferSize || 0)
    .reduce((prev, next) => prev + next, 0);

const equivalence = (emissions: number) => {
  const cupsOfCoffee = roundToOneDecimal(emissions * COFFEE_CONVERSION);
  const treesOfset = Math.ceil(emissions / CO2_ABSORBED_BY_TREES_ANNUALLY);

  return {
    cupsOfCoffee,
    treesOfset,
  };
};

const getNetworkTraffic = ({ url, key }: { url: string; key: string }) => {
  return fetch(`${GOOGLE_PAGESPEED_API_ENDPOINT}?url=${url}&key=${key}`).then(
    (res) => res.json()
  );
};

const getGreenWeb = (url: string): Promise<GreenFoundationAPIResponse> => {
  const parsedURL = new URL(url);
  return fetch(`${GREEN_FOUNDATION_API_ENDPOINT}/${parsedURL.host}`).then(
    (res) => res.json()
  );
};
const getEmissionsPerVisit = (energy: number, isGreen: boolean) => {
  return isGreen
    ? energy * PERCENTAGE_OF_ENERGY_IN_DATACENTER * CARBON_PER_KWG_RENEWABLE +
        energy *
          PERCENTAGE_OF_ENERGY_IN_TRANSMISSION_AND_END_USER *
          CARBON_PER_KWG_GRID
    : energy * CARBON_PER_KWG_GRID;
};

function calculateEnergyPerVisit(totalDataTransfer: number): number {
  const energyForAllVisitors =
    totalDataTransfer * ANNUAL_INTERNET_ENGERGY * FIRST_TIME_VIEWING_PERCENTAGE;

  const energyForReturningVisitors =
    totalDataTransfer *
    ANNUAL_INTERNET_ENGERGY *
    RETURNING_VISITOR_PERCENTAGE *
    RETURNING_VISOTOR_CACHE_PERCENTAGE;

  const totalEnergyPerVisit = energyForAllVisitors + energyForReturningVisitors;

  return totalEnergyPerVisit;
}

const getStats = (bytes: number, isGreen: boolean) => {
  const adjustedBytes = calculateEnergyPerVisit(bytes);
  const energy = adjustedBytes * (KWG_PER_GB / GIGTABYTE);
  const emissionsPerVisit = getEmissionsPerVisit(energy, isGreen);
  const emissionsPerYear = getAnnualEmissions(emissionsPerVisit);
  const energyEquivalence = equivalence(emissionsPerYear);

  const test = {
    emissionsPerVisit: { result: emissionsPerVisit, units: "g CO2e" },
    adjustedBytes: { result: adjustedBytes, unit: "bytes" },
    energy,
    emissionsPerYear: {
      result: roundToOneDecimal(emissionsPerYear),
      units: "kg CO2e",
    },
    energyEquivalence,
  };
  return test;
};

export const calculateByURL = async (url: string) => {
  try {
    const normalisedURL = normalizeUrl(url);

    if (!normalisedURL) {
      throw new Error("Enter a proper url please");
    }
    const [pagespeedapi, greenweb] = await Promise.all([
      getNetworkTraffic({
        url: normalisedURL,
        key: process.env.GOOGLE_API_KEY!,
      }),
      getGreenWeb(normalisedURL),
    ]);

    if (!pagespeedapi || !greenweb) {
      throw new Error("Something went wrong getting your data");
    }

    const isGreenHost = greenweb?.green;

    const bytesTransferred = calculateTransferredBytes(
      pagespeedapi.lighthouseResult.audits["network-requests"].details.items
    );

    const stats = getStats(bytesTransferred, isGreenHost);
    return stats as unknown as Data;
  } catch (e: any) {
    return undefined;
  }
};
