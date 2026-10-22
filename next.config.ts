import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages: static HTML, one folder per route (/nosotros/ → nosotros/index.html)
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
