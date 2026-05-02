import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // 🚨 not recommended for production!
  },
  serverExternalPackages: [
    "gsap",
    "lenis",
    "@studio-freight/lenis",
    "three",
    "@react-three/fiber",
  ],
};

export default nextConfig;
