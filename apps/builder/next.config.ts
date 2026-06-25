import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@silicon/ui'],
  experimental: {
    optimizePackageImports: ['@silicon/ui', 'lucide-react'],
  },
}

export default nextConfig
