/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      // TODO: accept only images from cloudflare workers URL
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      })

    return config
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/abuuzayr/brandbuzza",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
