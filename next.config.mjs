/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Set output to 'export' for static site export
  output: "export",
  images: {
    unoptimized: true, // Optional: Helps with static export if using images
  },
};

export default nextConfig;
