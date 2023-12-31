export async function getCalc(url: string) {
  try {
    const resp = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const { data } = await resp.json();
    if (!resp.ok) {
      throw new Error("No data");
    }
    return data;
  } catch (e) {
    return undefined;
  }
}

export function roundToOneDecimal(num: number): number {
  return Number(num.toFixed(1));
}

export function validUrl(url: string): string | undefined {
  const urlRegex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
  if (!urlRegex.test(url)) {
    return undefined;
  }
  return url;
}
