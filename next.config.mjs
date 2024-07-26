/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Optional: Helps with static export if using images
  },
};

export default nextConfig;
