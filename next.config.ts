/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'wasm-unsafe-eval' 'unsafe-inline' chrome-extension:; object-src 'self'",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
