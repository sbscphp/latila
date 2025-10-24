import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", 
  turbopack: {
    root: process.cwd(),
  },
  images: {
    domains: ["https://deserving-passion-2c6c2f79bf.strapiapp.com/api/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deserving-passion-2c6c2f79bf.strapiapp.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
