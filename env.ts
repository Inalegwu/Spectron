import { cleanEnv, url } from 'envalid';

export const Env = cleanEnv(process.env, {
  DATABASE_URL: url(),
});
