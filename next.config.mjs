/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (conf) => {
    conf.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
    return conf;
  },
};

export default nextConfig;
