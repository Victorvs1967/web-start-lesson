import * as nodePath from 'path';

const root = nodePath.basename(nodePath.resolve());

const src = './src',
      dest = './dist';

export const path = {
  src: {
    scripts: `${src}/scripts/main.js`,
    styles: `${src}/styles/*.sass`,
    html: [`${src}/html/**/*.pug`, `!${src}/html/includes/**/*.*`],
    fonts: [`${src}/fonts/**/*.ttf`, `${src}/fonts/**/*.otf`],
    images: `${src}/images/**/*.{png,jpg,jpeg,gif,webp}`,
    videos: `${src}/videos/**/*.mp4`,
    svg: `${src}/images/**/*.svg`,
    svgicons: `${src}/icons/*.svg`,
  },
  dest: {
    scripts: `${dest}/js/`,
    styles: `${dest}/css/`,
    html: `${dest}/`,
    images: `${dest}/img/`,
    videos: `${dest}/videos/`,
    fonts: `${dest}/fonts/`
  },
  watch: {
    scripts: `${src}/scripts/**/*.js`,
    styles: `${src}/styles/**/*.sass`,
    html: `${src}/**/*.pug`,
    images: `${src}/images/**/*.{png,jpg,jpeg,gif,webp,svg}`,
    svg: `${src}/images/**/*.svg`,
    svgicons: `${src}/icons/*.svg`,
},
  clean: dest,
  buildFolder: dest,
  srcFolder: src,
  rootFolder: root
};
