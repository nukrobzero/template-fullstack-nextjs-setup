/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["drive.google.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
