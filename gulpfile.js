const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

/*
https://www.youtube.com/watch?v=QgMQeLymAdU
tutorial link 
*/

// compile scss into css 
function style() {
  // 1. where is my scss file 
  return gulp.src('./app/scss/**/*.scss')
  // 2. pass that file through sass compiler
  .pipe(sass())
  // 3. where do I save the comiled CSS?
  .pipe(gulp.dest('./app/css'))
  // 4. stream changes to all browser
  .pipe(browserSync.stream());
}

// automatically change
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./app/scss/**/*.scss', style);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
  gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
