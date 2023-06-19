/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: { appDir: true },
    rewrites: async () => [
        {
            source: '/api/:path*',
            destination: 'http://localhost:8080/api/:path*',
        }, 
    ],
};

module.exports = nextConfig;
