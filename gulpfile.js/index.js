const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const ttf2woff2 = require('gulp-ttf2woff2');
const webpack = require('webpack-stream');
var shorthand = require('gulp-shorthand');
const imagemin = require('gulp-imagemin');
const webpCss = require('gulp-webp-css');
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fonter = require('gulp-fonter');
const concat = require('gulp-concat');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const csso = require('gulp-csso');
const size = require("gulp-size");
const webp = require('gulp-webp');

// Imports
const clear = require('../tasks/clear');
const html = require('../tasks/html');
const css = require('../tasks/css');

//Browser sync
const server = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
};

 // Scss
const scss = () => {
   return src("./src/scss/index.scss", { sourcemaps: true })
     .pipe(plumber({
       errorHandler: notify.onError(error => ({
          title: 'SCSS',
          message: error.message
       }))
     }))
     .pipe(concat('style.min.css'))
     .pipe(shorthand())
     .pipe(webpCss())    
     .pipe(sass())
     .pipe(autoprefixer({}))
     .pipe(size({ title: "SCSS Before compressing", }))
     .pipe(csso())
     .pipe(size({ title: "SCSS after compressing", }))
     .pipe(dest("./dist/css", { sourcemaps: true }))
     .pipe(browserSync.stream());
 };

 // Js
const js = () => {
  return src("./src/**/*.js", { sourcemaps: true })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: 'JavaScript',
         message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(webpack({
      mode: 'production'
    }))
    .pipe(dest("./dist/js", { sourcemaps: true }))
    .pipe(browserSync.stream());
};

 // Images
 const images = () => {
  return src("./src/images/**/*",)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: 'Images',
         message: error.message
      }))
    }))
    .pipe(newer('./dist/images/**/*'))
    // add gulp-webp plugin
    .pipe(webp())
    .pipe(dest("./dist/images"))
    .pipe(src("./src/images/**/*",))
    // finish gulp-webp plugin
    .pipe(newer('./dist/images/**/*'))
    .pipe(imagemin({
      verbose: true,
    },[   
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest("./dist/images"))
    .pipe(browserSync.stream());
};

 // Fonts
 const fonts = () => {
  return src('./src/fonts/*')
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: 'Fonts',
         message: error.message
      }))
    }))
    .pipe(newer('./dist/fonts/'))
    .pipe(fonter({
      formats: ['woff', 'ttf', 'eot', 'svg']
    }))
    .pipe(dest('./dist/fonts/'))
    .pipe(ttf2woff2())
    .pipe(dest('./dist/fonts/'))
    .pipe(browserSync.stream());
};

// Watcher
const watcher = () => {
   watch("./src/**/*.html", html).on('change', browserSync.reload);
   watch("./src/scss/*.scss", scss).on('change', browserSync.reload);
   watch("./src/js/**/*.js", js).on('change', browserSync.reload);
   watch("./src/images", images).on('change', browserSync.reload);
   watch("./src/fonts", fonts).on('change', browserSync.reload);
 };

 // Run dev
 const dev = series (
  clear,
  parallel (html, scss, js, images, fonts), 
  parallel(server, watcher)
 );
  // Run Build
 const build = series ( 
  clear,
  parallel (html, scss, js, images, fonts), 
 );

exports.html = html;
exports.watch = watcher;
exports.clear = clear;
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.images = images;
exports.fonts = fonts;

// Assembly
exports.default = dev;
exports.build = build;
exports.dev = dev;
