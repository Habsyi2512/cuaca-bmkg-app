import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  try {
    const seedFilePath = path.join(__dirname, "wilayah.sql");
    execSync(`psql ${process.env.DATABASE_URL} -f ${seedFilePath}`, {
      stdio: "inherit",
    });

    console.log("✅ Seeding selesai!");
  } catch (error) {
    console.error("❌ Gagal melakukan seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
