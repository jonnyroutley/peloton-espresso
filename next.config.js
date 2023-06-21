/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //       // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
  //       config.resolve.fallback = {
  //           fs: false,
  //           child_process: false,
  //       }
  //   }
  //   return config
  // }
}

module.exports = nextConfig
