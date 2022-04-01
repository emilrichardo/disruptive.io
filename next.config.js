/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    restApi : "https://staging.disruptivenews.io/",
    tokenApi  : "https://api.pancakeswap.info/api/v2/tokens/",
    contractToken :"0xd70a9D1c9fDd3D8DD2fb672bB399F7bcA61666bD"
  }
}

module.exports = nextConfig
