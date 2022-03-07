const { src, dest } = require("gulp");

const autoprefixer = require('gulp-autoprefixer');
const webpCss = require('gulp-webp-css');
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const size = require("gulp-size");

const css = () => {
   return src("./src/**/*.css", { sourcemaps: true })
     .pipe(plumber({
       errorHandler: notify.onError(error => ({
          title: 'CSS',
          message: error.message
       }))
     }))
     .pipe(concat('style.css'))
     .pipe(webpCss())
     .pipe(autoprefixer({ }))
     .pipe(size({ title: "CSS Before compressing", }))
     .pipe(dest("./dist/css", { sourcemaps: true }))
     .pipe(csso())
     .pipe(size({ title: "CSS After compressing", }))
     .pipe(dest("./dist/css"));
 };

 module.export = css;