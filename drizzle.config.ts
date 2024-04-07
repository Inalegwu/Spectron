import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schemas/**/*.schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://postgres:admin@127.0.0.1/plat_jobs_dev",
  },
  verbose: true,
  strict: true,
} satisfies Config;
