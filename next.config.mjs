/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        // hostname: '**',
        // port: '',
        // pathname: '**/.*/**',

        protocol: "https",
        hostname: "**.vercel.app",
        port: "",
      },
    ],
  },
};

export default nextConfig;
