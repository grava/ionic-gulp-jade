'use strict';

var gulp = require('gulp'),
    buildJade = require('../index'),
    runSequence = require('run-sequence'),
    gulpWatch = require('gulp-watch'),
    del = require('del');

gulp.task('watch', ['clean'], function(done){
  runSequence(
    ['pug'],
    function(){
      gulpWatch('./src/**/*.jade', function(){ gulp.start('pug'); });
    }
  );
});

gulp.task('clean', function() {
  return del('./dest');
})
   
gulp.task('pug', function() {
  return buildJade(
  {
    src: './src/**/*.jade',
    dest: './dest'
   });
})