var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var webpack = require('webpack-stream');

gulp.task('default', ['watch', 'build']);

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('copy', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['webpack:dev', 'copy']);

gulp.task('watch', function() {
  gulp.watch(['*.js',  'routes/*routes.js', 'models/*model.js', 'app/**/*.js']);
});
