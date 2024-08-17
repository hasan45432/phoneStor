/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "technofadakar.liara.run",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
