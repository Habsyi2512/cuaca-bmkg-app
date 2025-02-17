"use client";

import React, { useState } from "react";
import ProvinceCarousel from "./ProvinceCarousel";

type DaysType = "Kemarin" | "Hari Ini" | "Besok";

export default function WeatherAllProvince() {
  const [cuacaDay, setCuacaDay] = useState<DaysType>("Hari Ini");
  const days: DaysType[] = ["Kemarin", "Hari Ini", "Besok"];

  return (
    <div>
      <h1 className="text-2xl mb-3 leading-[33px] md:text-[32px] md:leading-[48px] xl:text-[40px] xl:leading-[54px] font-bold text-gray-700">
        Cuaca {cuacaDay}
      </h1>
      <div className="space-x-3 mb-3">
        {days.map((day) => (
          <button
            key={day}
            className={`rounded-md border-gray-300 border px-4 py-2 font-medium text-sm ${
              day === cuacaDay
                ? "bg-gray-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setCuacaDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <ProvinceCarousel />
    </div>
  );
}
