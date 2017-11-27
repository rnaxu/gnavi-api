import handlebars from 'handlebars';
import Metalsmith from 'metalsmith';
// import models from 'metalsmith-models';
// import collections from 'metalsmith-collections';
import inPlace from 'metalsmith-in-place';
import layouts from 'metalsmith-layouts';
// import beautify from 'metalsmith-beautify';
import watch from 'metalsmith-watch';
import htmlMinifier from 'metalsmith-html-minifier';

let envWatch;
let envMinify;

if (process.env.NODE_ENV === 'production') {
  envWatch = () => null;
  envMinify = () => htmlMinifier('*.html');
} else {
  envWatch = () => watch({
    paths: {
      '${source}/**/*': true,
      './src/hbs/**/*': '**/*',
    },
  });
  envMinify = () => null;
}

Metalsmith(__dirname)
  .source('./src/hbs/page')
  .destination('./dist')
  .clean(false)
  // .use(models({
  //   directory: './src/hbs/data/',
  // }))
  // .use(collections({
  //   pages: {
  //     pattern: ['**/*.hbs', '!index.hbs'],
  //     sortBy: 'id',
  //   },
  // }))
  .use(layouts({
    engine: 'handlebars',
    directory: './src/hbs/layout',
    partials: './src/hbs/partial',
    default: 'default.hbs',
    pattern: '**/*.hbs',
    rename: true,
  }))
  .use(inPlace({
    engine: 'handlebars',
    directory: './src/hbs/layout',
    partials: './src/hbs/partial',
  }))
  // .use(beautify({
  //   js: false,
  //   html: {
  //     indent_size: 4,
  //     indent_char: ' ',
  //     indent_with_tabs: false,
  //     indent_inner_html: false,
  //     preserve_newlines: false,
  //     wrap_line_length: 0,
  //     extra_liners: ' ',
  //     unformatted: ' ',
  //   },
  // }))
  .use(envMinify())
  .use(envWatch())
  .build((err) => {
    if (err) throw err;
  });