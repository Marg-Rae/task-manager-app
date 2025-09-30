/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@prisma/client", "prisma"],
  outputFileTracingRoot: __dirname
}

module.exports = nextConfig