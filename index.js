var gulp = require('gulp'),
    jade = require('gulp-jade'),
	 assign = require('lodash.assign');

var defaultOptions = {
  src: 'app/**/*.ts',
  dest: 'www/build/**/*.html'
};


module.exports = function(options) {
  options = assign(defaultOptions, options);

  return gulp.src(options.src)
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest(options.dest));
}

