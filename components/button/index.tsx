// @ts-nocheck
"use client";

import { getCalc } from "@/utils/helper";
import React, { useEffect, useState } from "react";

const Button = () => {
  const [stats, setStats] = useState<any>();
  const [email, setEmail] = useState<string>("")
  const handleClick = async () => {
    try {
      console.log('🟠 - sending')
      const data = await getCalc(email);
      setStats(data);
console.log('data', data)
    } catch (e) {
      console.log("something went wrong, ", e.message);
    }
  };

  return (
    <div className="w-screen height-screen flex flex-col items-center justify-center">
      <input className="px-5 py-3 my-5" type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
      <button onClick={handleClick} className="bg-green-500 px-6 py-3">
        Click
      </button>
      {/* {stats && <div>{stats}</div>} */}
    </div>
  );
};

export default Button;
