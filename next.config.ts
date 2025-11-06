import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          process.env.NEXT_PUBLIC_STRAPI_HOSTNAME ||
          "deserving-passion-2c6c2f79bf.strapiapp.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
