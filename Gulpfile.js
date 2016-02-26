var browserify = require('browserify');

var gulp = require('gulp');
var uglify = require('gulp-uglify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var b = browserify('./source/page-test/', {
  //debug: true,
  paths: [
    './node_modules',
    './source/modules/'
  ]
});

var onBrowserifyError = function(err){
  console.log(err.toString());
  this.emit("end");
};

var browseryfied = function(){
  return b.transform('babelify', { presets: ['es2015'] })
    .bundle()
    .on('error', onBrowserifyError);
}

/* ------ TASKS ----- */

gulp.task('build-dev', function() {
  return browseryfied()
    .pipe(source('page-test.js'))
    .pipe(gulp.dest('release'));
});

gulp.task('build-pro', function() {
  return browseryfied()
    .pipe(source('page-test.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('release'));
});
