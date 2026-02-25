var gulp = require('gulp'),
/*
browserSync = require('browser-sync'),
pug = require('gulp-pug'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
sass = require('gulp-sass'),
*/
watch = require('gulp-watch'),
sass = require('gulp-sass')(require('sass'));
plumber = require('gulp-plumber'),
sassGlob = require("gulp-sass-glob");
sourcemaps = require('gulp-sourcemaps'),

rootdir = '/webpage/ngs/html/web/_scss/'
outdir = '/webpage/ngs/html/web/css/'
/* Sass */
gulp.task('sass', function () {
/*  var plugins = [
    autoprefixer(),
  ];
  */
  return gulp.src([rootdir + '*.scss'])
  .pipe(sassGlob())
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(sass({
    outputStyle : 'expanded'
  }))
  .pipe(sourcemaps.write(outdir))
  .pipe(gulp.dest(outdir));
});


/* Browser-sync */
/*gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: './',
    },
  });
});
*/
/* Watch */
/*
gulp.task('watch', function() {
  watch('_src/pug//*.pug', function(e) {
    gulp.start('pug');
  });

  watch('./*.scss', function(e) {
    gulp.start('sass2');
  });
});
*/
gulp.task('watch', function() {
/*
	gulp.watch('_src/pug//*.pug', gulp.task('pug'));
*/
	gulp.watch(rootdir + '*.scss', gulp.task('sass'));
});

/* Default */
gulp.task('default', gulp.parallel('watch'));
