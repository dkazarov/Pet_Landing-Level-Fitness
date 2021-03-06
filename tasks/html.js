const { src, dest } = require("gulp");

const webpHTML = require('gulp-webp-html');
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");

const html = () => {
   return src ('./src/*.html')
     .pipe(webpHTML())
     .pipe(size({ title: "HTML Before compressing", }))
     .pipe( htmlmin({ collapseWhitespace: true, }) )
     .pipe(size({ title: "HTML After compressing", }))
     .pipe(dest("./dist/"));
 };

 module.exports = html;