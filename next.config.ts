import type { NextConfig } from "next";
import path from "node:path";

// Content-Security-Policy, sent as Report-Only so violations are logged in
// the browser console without blocking anything. Inline scripts are allowed
// because Next.js hydration and the JSON-LD blocks are inline; everything
// else is limited to this origin plus Plausible (analytics) and Unsplash
// (remote images). upgrade-insecure-requests is left out: browsers ignore it
// in a Report-Only policy, and HSTS already forces HTTPS.
//
// Netlify adds its Deploy Preview toolbar (the Netlify Drawer) as a frame from
// app.netlify.com on deploy previews only. Netlify sets CONTEXT at build time,
// so only deploy-preview builds allow that frame; production keeps the
// default-src fallback and gains no framing permission.
const isDeployPreview = process.env.CONTEXT === "deploy-preview";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://plausible.io",
  "connect-src 'self' https://plausible.io",
  "img-src 'self' data: blob: https://images.unsplash.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDeployPreview ? ["frame-src 'self' https://app.netlify.com"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Five older posts were removed on 2026-11-06; their URLs point to the closest
  // remaining article (or the blog index) so links and search results still work.
  async redirects() {
    return [
      { source: "/blog/gnss-lora-vs-gnss-ltem", destination: "/blog/lorawan-farm-network-planning", permanent: true },
      { source: "/blog/low-power-animal-tracker-design", destination: "/blog/iot-hardware-development-process", permanent: true },
      { source: "/blog/pet-tracker-pcb-design", destination: "/blog/iot-hardware-development-process", permanent: true },
      { source: "/blog/wireless-poultry-monitoring-design", destination: "/blog/poultry-house-air-quality-sensors", permanent: true },
      { source: "/blog/smart-pet-feeder-engineering", destination: "/blog", permanent: true },
      { source: "/de/blog/gnss-lora-vs-gnss-ltem", destination: "/de/blog/lorawan-farm-network-planning", permanent: true },
      { source: "/de/blog/low-power-animal-tracker-design", destination: "/de/blog/iot-hardware-development-process", permanent: true },
      { source: "/de/blog/pet-tracker-pcb-design", destination: "/de/blog/iot-hardware-development-process", permanent: true },
      { source: "/de/blog/wireless-poultry-monitoring-design", destination: "/de/blog/poultry-house-air-quality-sensors", permanent: true },
      { source: "/de/blog/smart-pet-feeder-engineering", destination: "/de/blog", permanent: true },
      { source: "/fr/blog/gnss-lora-vs-gnss-ltem", destination: "/fr/blog/lorawan-farm-network-planning", permanent: true },
      { source: "/fr/blog/low-power-animal-tracker-design", destination: "/fr/blog/iot-hardware-development-process", permanent: true },
      { source: "/fr/blog/pet-tracker-pcb-design", destination: "/fr/blog/iot-hardware-development-process", permanent: true },
      { source: "/fr/blog/wireless-poultry-monitoring-design", destination: "/fr/blog/poultry-house-air-quality-sensors", permanent: true },
      { source: "/fr/blog/smart-pet-feeder-engineering", destination: "/fr/blog", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
