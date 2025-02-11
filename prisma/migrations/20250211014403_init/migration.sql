-- CreateTable
CREATE TABLE "wilayah" (
    "kode" VARCHAR(13) NOT NULL,
    "nama" VARCHAR(100),

    CONSTRAINT "wilayah_pkey" PRIMARY KEY ("kode")
);

-- CreateIndex
CREATE INDEX "wilayah_name_idx" ON "wilayah"("nama");
