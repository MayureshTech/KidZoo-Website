import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/KidZoo-Website",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
