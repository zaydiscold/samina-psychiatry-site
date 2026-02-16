import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'samina-psychiatry-site';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
};

export default nextConfig;
