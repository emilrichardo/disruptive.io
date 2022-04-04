/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    restApi : "http://disruptiveio.local",
    tokenApi  : "https://api.pancakeswap.info/api/v2/tokens/",
    contractToken :"0xd70a9D1c9fDd3D8DD2fb672bB399F7bcA61666bD"
  },
  images:{
    domains:['staging.disruptivenews.io']
  }
}

module.exports = nextConfig
