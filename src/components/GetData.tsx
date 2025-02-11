import React from "react";
import { TypeLokasi } from "@/interfaces/lokasi";

interface TypeData {
  lokasi: TypeLokasi;
  data: unknown;
}

export default async function GetData() {
  const response = await fetch(
    "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=11.02.01.2009"
  );
  const data: TypeData = await response.json();

  return <div>data: {data.lokasi.kecamatan}</div>;
}
