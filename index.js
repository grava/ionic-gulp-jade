var gulp = require('gulp'),
    pug = require('gulp-pug'),
    debug = require('gulp-debug'),
    assign = require('lodash.assign'),
    gulpWatch = require('gulp-watch');

var defaultOptions = {
  src: 'app/**/*.jade',
  dest: 'www/build/',
  pugOptions: {
    pretty: true,
    doctype: 'html'
  },
  done: function () { },
  onError: function (err) {
    console.error(err.message);
    this.emit('end'); // Don't kill watch tasks - https://github.com/gulpjs/gulp/issues/259
  }
};


module.exports = function (options) {
  options = assign(defaultOptions, options);

  console.log(options.src);
  console.log(options.dest);
  return gulp.src(options.src)
    .pipe(debug({title: "processing: "}))
    .pipe(pug(options.pugOptions))
    .on('error', options.onError)
    .on('end', options.done)
    .pipe(gulp.dest(options.dest))
    .pipe(debug({title: "writing: "}))
    .on('end', options.done);
}

