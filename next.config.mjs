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
        hostname: "**.githubusercontent.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
