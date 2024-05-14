/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "render.albiononline.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "albiononline.ams3.cdn.digitaloceanspaces.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.albiononline.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
