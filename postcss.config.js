let plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    require('postcss-import')(),
    require('postcss-nested')(),
    require('postcss-cssnext')(),
    require('cssnano')({
      autoprefixer: false,
    }),
  ];
} else {
  plugins = [
    require('postcss-import')(),
    require('postcss-nested')(),
    require('postcss-cssnext')(),
  ];
}

module.exports = {
  plugins,
};
