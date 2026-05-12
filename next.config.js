/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  experimental: {
    // optimizeCss (critters) breaks dev hydration in Next 13.5 on some setups
    // and is only useful for production HTML. Enable only in prod builds.
    optimizeCss: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 160, 256],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
