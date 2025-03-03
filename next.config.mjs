/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Add any svgr options here, if needed
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
