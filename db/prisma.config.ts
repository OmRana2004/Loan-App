import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  // paths are RELATIVE TO THIS FILE (db/)
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: process.env.DATABASE_URL,
  },
});
