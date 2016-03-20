var path = require('path');
var gulp = require('gulp');
var util = require('gulp-util');
var replace = require('gulp-html-replace');
var concat = require('gulp-concat');
var less = require('gulp-less');
var marked = require('marked');
var dist = __dirname;
var fs = require('fs');

gulp.task('css', function(){
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'src/vendor/**/*.css',
    'src/css/*.css',
    'src/css/*.less'
  ])
  .pipe(less())
  .pipe(concat('style.css'))
  .pipe(gulp.dest(dist));
});
gulp.task('js', function(){
  return gulp.src([
    'src/vendor/**/*.js',
    'src/js/*.js'
  ]).pipe(concat('script.js')).pipe(gulp.dest(dist));
});
gulp.task('html', function(){
  return gulp.src([
    'src/index.html'
  ])
  .pipe(replace({
    cv: marked(fs.readFileSync(path.join(__dirname, 'src', 'cv.md')).toString())
  }))
  .pipe(gulp.dest(dist));
});
gulp.task('build', ['css', 'html', 'js']);
gulp.task('watch', ['build'], function(){
  gulp.watch(['./src/**/*'], ['build']);
});

gulp.task('default', ['build']);
