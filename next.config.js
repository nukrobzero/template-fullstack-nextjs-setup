const UnoCSS = require("@unocss/webpack").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
  webpack: (config) => {
    config.plugins.push(
      UnoCSS() // <--
    );
    config.cache = false; // have to be false for hmr
    return config;
  },
};

module.exports = nextConfig;
