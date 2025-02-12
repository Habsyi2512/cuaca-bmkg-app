"use client";

import moment from "moment-timezone";
import "moment/locale/id";
import { useEffect, useState } from "react";

moment.locale("id");

export default function Navbar() {
  const [time, setTime] = useState(
    moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY HH:mm:ss")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY HH:mm:ss")
      );
    }, 1000);

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);
  return (
    <nav>
      <ul className="flex py-2 px-5 bg-neutral-200">
        <li className="font-medium text-sm text-neutral-500">{time}</li>
      </ul>
    </nav>
  );
}
