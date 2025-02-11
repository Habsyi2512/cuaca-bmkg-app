export interface TypeLokasi {
  adm1: string;
  adm2: string;
  adm3: string;
  adm4: string;
  provinsi: string;
  kotkab: string;
  kecamatan: string;
  desa: string;
  lon: number;
  lat: number;
  timezone: string;
}

export interface TypeLokasiData extends TypeLokasi {
  type: string;
}

export interface TypeCuaca {
  datetime: string;
}

export interface TypeData {
  lokasi: TypeLokasiData;
  cuaca: TypeCuaca[];
}
