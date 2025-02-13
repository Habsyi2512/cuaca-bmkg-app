"use client";

import { useEffect, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/id";

moment.locale("id");

export default function Navbar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY HH:mm:ss")
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <ul className="flex py-2 px-5 bg-[#F1F5F9]">
        <li className="font-medium text-sm text-neutral-500">
          {time ?? "Memuat waktu..."}
        </li>
      </ul>
    </nav>
  );
}
