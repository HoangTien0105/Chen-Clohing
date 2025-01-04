import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Custom webpack configuration
    return config;
  },
};

export default nextConfig;