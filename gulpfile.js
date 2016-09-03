var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var util = require('gulp-util');
var concat = require('gulp-concat');
var mergeStream = require('merge-stream');
var mu = require('gulp-mustache');
var less = require('gulp-less');
var marked = require('marked');
var dist = __dirname;
var fs = require('fs');
var glob = require('glob');
var async = require('async');
var fm = require('front-matter');
var xtend = require('xtend');

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
  var output = gulp.dest(dist);
  async.waterfall([
    function(next){
      glob('src/contents/*.md', next);
    },
    function(res, next){
      async.map(res, fs.readFile, next);
    }
  ], function(err, res){
    var pages = res.map(function(file){
      return file.toString();
    }).map(fm).map(function(file){
      var attrs = file.attributes;
      return xtend(attrs, {
        content: marked(file.body),
        filename: attrs.filename || attrs.name,
        href: attrs.filename === 'index' ? '/' : attrs.filename || attrs.name
      });
    }).sort(function(a, b){
      return a.order - b.order;
    });

    var files = [];

    // pages
    files.push.apply(files, pages.map(function(page){
      return gulp
      .src(['src/templates/page.html'])
      .pipe(mu({
        items: pages,
        current: page
      }))
      .pipe(rename(page.filename + '.html'));
    }));

    mergeStream.apply(null, files).pipe(output);
  });
  return output;
});
gulp.task('build', ['css', 'html', 'js']);
gulp.task('watch', ['build'], function(){
  gulp.watch(['./src/**/*'], ['build']);
});

gulp.task('default', ['build']);
