import { type Config } from "drizzle-kit";


export default {
    driver:"pg",
    dbCredentials:{
        connectionString:"postgres://postgres:admin@127.0.0.1/plat_jobs_dev",
    }
} satisfies Config