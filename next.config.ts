import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    // 404 com layout próprio, já que cada idioma tem seu layout raiz
    globalNotFound: true,
  },
};

export default nextConfig;
