/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Placeholder photography (see lib/site.ts) — swap for licensed brand imagery.
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // The Value Track logo, hotlinked from the live site for now.
      { protocol: 'https', hostname: 'getonthevaluetrack.com' },
    ],
  },
};

export default nextConfig;
