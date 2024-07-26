/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this configuration to support static export
  output: "export",
  images: {
    unoptimized: true, // Ensure images work in static export
  },
};

export default nextConfig;
