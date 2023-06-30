/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
