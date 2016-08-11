var gulp = require('gulp'),
    jade = require('gulp-jade'),
	 assign = require('lodash.assign');

var defaultOptions = {
  src: 'app/**/*.jade',
  dest: 'www/build/',
  jadeOptions: { 
    pretty: true,
    doctype: 'html'
  },
  done: function (){},
  onError: function(err) {
    console.error(err.message);
    this.emit('end'); // Don't kill watch tasks - https://github.com/gulpjs/gulp/issues/259
  }
};


module.exports = function(options) {
  options = assign(defaultOptions, options);

return gulp.src(options.src)
      .pipe(jade(options.jadeOptions))
      .on('error', options.onError)
      .on('end', options.done)
      .pipe(gulp.dest(options.dest))
      .on('end', options.done);
}

