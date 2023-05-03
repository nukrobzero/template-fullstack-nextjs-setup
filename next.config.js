/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "drive.google.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
