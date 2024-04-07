import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schemas";

const migrationClient = postgres(
  "postgres://postgres:admin@127.0.0.1/plat_jobs_dev",
  {
    max: 1,
  },
);

migrate(drizzle(migrationClient), {
  migrationsFolder: ".drizzle",
  migrationsTable:"migrations",
});

const queryClient = postgres("postgres://postgres:admin@127.0.0.1/plat_jobs_dev");
const db = drizzle(queryClient, {
  schema,
});

export default db;
