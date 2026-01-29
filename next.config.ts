import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Cloudflare Pages / static hosting
  output: "export",
  
  // Required for static export - disable image optimization
  images: {
    unoptimized: true,
  },
  
  // React Compiler for performance
  reactCompiler: true,
  
  // Trailing slashes for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
