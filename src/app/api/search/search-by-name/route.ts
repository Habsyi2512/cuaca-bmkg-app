import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface ResponseType<T> {
  status: number;
  data: T[];
  error?: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json<ResponseType<null>>(
      { status: 400, data: [], error: "Query not specified" },
      { status: 400 }
    );
  }

  try {
    // Ambil semua data wilayah yang sesuai query
    const dataWilayahIV = await prisma.wilayah.findMany({
      where: {
        nama: {
          contains: query,
          mode: "insensitive",
        },
      },
      take: 10,
    });

    // Filter hanya kode yang memiliki panjang 13 karakter
    const filteredDataWilayah = dataWilayahIV.filter(
      (data) => data.kode.length === 13
    );

    if (filteredDataWilayah.length === 0) {
      return NextResponse.json<ResponseType<null>>(
        { status: 404, data: [], error: "Data not found" },
        { status: 404 }
      );
    }

    // Ambil kode provinsi unik
    const provinceCodes = [
      ...new Set(filteredDataWilayah.map((data) => data.kode.split(".")[0])),
    ];

    // Ambil semua nama provinsi dalam satu query
    const provinces = await prisma.wilayah.findMany({
      where: { kode: { in: provinceCodes } },
      select: { kode: true, nama: true },
    });

    // Buat mapping kode provinsi ke nama provinsi
    const provinceMap = Object.fromEntries(
      provinces.map((prov) => [prov.kode, prov.nama])
    );

    // Tambahkan nama provinsi ke hasil akhir
    const dataWilayahLengkap = filteredDataWilayah.map((data) => ({
      ...data,
      provinceName: provinceMap[data.kode.split(".")[0]] || "Unknown",
    }));

    return NextResponse.json<ResponseType<(typeof dataWilayahLengkap)[0]>>({
      status: 200,
      data: dataWilayahLengkap,
    });
  } catch (error) {
    return NextResponse.json<ResponseType<null>>(
      { status: 500, data: [], error: "Something went wrong\n" + error },
      { status: 500 }
    );
  }
}
