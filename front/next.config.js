module.exports = {
  handleImages: ['jpeg', 'png', 'svg', 'gif'],
  webpack(config, {isServer}) {

    config.module.rules.push({
      test: /\.js$/,
      include: [
        /node_modules/
      ],
    });
    return config;
  },
  images: {
    domains: ['localhost:3000', "https://www.clubatoutalent.fr"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'imgix',
    path: process.env.NODE_ENV !== 'production' ? "http://localhost:3000" : "https://www.clubatoutalent.fr",
    minimumCacheTTL: 60
  },
  plugins: [
    require('autoprefixer')
  ]
}
