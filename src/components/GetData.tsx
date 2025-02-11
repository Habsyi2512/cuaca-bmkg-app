import React from "react";
import { TypeLokasi } from "@/types/interface";
import { TypeData } from "@/types/interface";

interface DataType {
  lokasi: TypeLokasi;
  data: TypeData[];
}

export default async function GetData() {
  const response = await fetch(
    "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=11.02.01.2009"
  );
  const data: DataType = await response.json();

  return <div>data: {data.data.map((item) => item.cuaca[0].datetime)}</div>;
}
