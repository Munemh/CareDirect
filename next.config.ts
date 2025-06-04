// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

// const nextConfig: NextConfig = {
//   webpack(config: Configuration) {
//     config.module?.rules?.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// };


// const nextConfig: NextConfig = {
//   webpack(config: Configuration) {
//     config.module?.rules?.push({
//       test: /\.svg$/,
//       use: [{
//         loader: '@svgr/webpack',
//         options: {
//           svgo: false,
//         },
//       }],
//     });
//     return config;
//   },
// };
// export default nextConfig;

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Keep your webpack config as fallback
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;