/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui", "@repo/shared"],
  webpack(config) {
    /**
     * ? SVGR SETUP
     */
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    /**
     * ?  REACT PDF SETUP
     */
    config.resolve.alias.canvas = false

    return config
  }
}
