let plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('cssnano')({
      autoprefixer: false
    })
  ]
} else {
  plugins = [
    require('postcss-import')(),
    require('postcss-cssnext')()
  ]
}

module.exports = {
  plugins: plugins
}