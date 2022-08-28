/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    domains:["ssct-bucket.s3.ap-northeast-2.amazonaws.com"]
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
    };

    return config;
  },
};
