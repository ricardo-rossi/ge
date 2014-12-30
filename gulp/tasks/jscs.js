/**
 * https://github.com/ricardo-rossi/ge
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license
 */

'use strict';

var gulp = require('gulp');
var paths = require('../utils/paths');
var jscs = require('gulp-jscs');

gulp.task('style', function() {
  gulp.src(paths.node.js)
    .pipe(jscs(paths.node.jscsrc));
});
