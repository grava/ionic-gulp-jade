'use strict';

var gulp = require('gulp'),
    buildJade = require('../index');


   
gulp.task('default', function() {
  return buildJade(
  {
    src: './src/**/*.jade',
    dest: './dest',
    jadeOptions: {
      pretty: true,
      doctype: 'html'
    }
   });
})