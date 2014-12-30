/**
 * https://github.com/ricardo-rossi/ge
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license
 */

'use strict';

var gulp = require('gulp');
var paths = require('../utils/paths');

var linter = function(jshintrc, src) {
  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');

  gulp.src(src)
    .pipe(jshint(jshintrc))
    .pipe(jshint.reporter(stylish));
};

gulp.task('lint', function() {
  linter(paths.node.jshintrc, paths.node.js);
});
