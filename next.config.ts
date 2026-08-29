import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote hosts allowed through the next/image optimizer.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.valorant-api.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
