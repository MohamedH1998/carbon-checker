"use client";

import React, { MutableRefObject, useEffect, useState } from "react";
import { CgCoffee } from "react-icons/cg";
import { IoMdRocket } from "react-icons/io";
import Card from "../../components/card";
import URLSearch from "../../components/url-search";
import { calculateByURL } from "@/utils/calculations";
import { GiFruitTree } from "react-icons/gi";

const Calculate = () => {
  const [url, setUrl] = useState<string>("");
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Data | undefined>(undefined);

  const fetchData = async () => {
    try {
      !loadingData && !data && setData(undefined);
      setLoadingData(true);
      const calcData = await calculateByURL(url);
      if (!calcData) {
        throw new Error("No data");
      }
      setData(calcData);
      setLoadingData(false);
      setUrl("");
    } catch (e) {
      setLoadingData(false);
      setError(true);
    }
  };

  const defaultInfo = !loadingData && !data;

  const cardInfo = [
    {
      icon: (
        <i className="rounded-md p-4 text-sandpiper bg-iron text-4xl">
          <IoMdRocket />
        </i>
      ),
      description: "Every year, your website emits",
      defaultStat: `--- Kg CO2e`,
      stat:
        data &&
        `${data.emissionsPerYear.result} ${data?.emissionsPerYear.units}`,
    },
    {
      icon: (
        <i className="rounded-md p-4 text-kittens-eye bg-aeronautic text-4xl ">
          <CgCoffee />
        </i>
      ),
      description: "Equivalent to",
      defaultStat: `--- cups of coffee`,
      stat: data && `${data.energyEquivalence.cupsOfCoffee} cups of coffee`,
    },
    {
      icon: (
        <i className="rounded-md p-4 bg-renaissance text-thallium-flame text-4xl ">
          <GiFruitTree />
        </i>
      ),
      description: "Equivalent to the amount of carbon absorbed by",
      defaultStat: `--- trees per year`,
      stat:
        data &&
        `${data.energyEquivalence.treesOfset} trees carbon absorption per year`,
    },
  ];

  return (
    <section className="w-full py-20 px-4 text-powder-white flex flex-col md:items-between md:py-24 md:px-20">
      <div className="w-full">
        <h2 className="text-3xl md:text-6xl md:py-6">
          Estimate your carbon footprint
          <small className="block text-dover-grey text-sm pt-3">
            *per 10,000 page views a month
          </small>
        </h2>
      </div>
      <div className="w-full flex flex-col space-y-6 lg:space-y-0 py-4 items-start justify-between lg:flex-col">
        <URLSearch
          loadingData={loadingData}
          error={error}
          setError={setError}
          fetchData={fetchData}
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
          {cardInfo.map((card, i) => (
            <Card {...card} loadingData={loadingData} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculate;
