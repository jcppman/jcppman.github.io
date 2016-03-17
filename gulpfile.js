var path = require('path');
var gulp = require('gulp');
var replace = require('gulp-html-replace');
var concat = require('gulp-concat');
var marked = require('marked');
var dist = __dirname;
var fs = require('fs');

gulp.task('css', function(){
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'src/css/*.css'
  ])
  .pipe(concat('style.css'))
  .pipe(gulp.dest(dist));
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
gulp.task('build', ['css', 'html']);

gulp.task('default', ['build']);
