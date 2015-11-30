var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var webpack = require('webpack-stream');

gulp.task('static:dev', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

ulp.task('test', function() {
  return gulp.src('test/*test.js')
    .pipe(mocha());
});

gulp.task('jshint', function() {
  return gulp.src(['*.js', 'test/*test.js', 'routes/*routes.js', 'models/*model.js', 'app/**/*.js'])
    .pipe(jshint())
});
gulp.task('build:dev', ['webpack:dev', 'static:dev']);
gulp.task('default', ['build:dev']);
