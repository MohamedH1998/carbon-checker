"use client";

import React, { useState } from "react";
import { validUrl } from "../../utils/helper";

interface Props {
  fetchData: () => void;
  error: boolean;
  loadingData: boolean;
  setError: (error: boolean) => void;
  url: string;
  setUrl: (url: string) => void;
}

const URLSearch = ({
  fetchData,
  error,
  setError,
  loadingData,
  url,
  setUrl,
}: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const transformedUrl = validUrl(url);
    if (transformedUrl === undefined) {
      setError(true);
    } else {
      setUrl(transformedUrl);
      setError(false);
      fetchData();
    }
  };

  return (
    <div className="w-full lg:mr-20">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-full"
      >
        <input
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          className="bg-squant py-3 px-5 rounded-full w-full mr-4"
        />
        <button
          disabled={loadingData}
          type="submit"
          className="rounded-full text-2xl p-1 px-3 text-powder-white  bg-squant"
        >
          +
        </button>
      </form>
      {error && (
        <p className="ml-2 py-2 text-red-500">
          Something went wrong, try again
        </p>
      )}
    </div>
  );
};

export default URLSearch;
