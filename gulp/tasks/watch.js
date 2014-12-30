/**
 * https://github.com/ricardo-rossi/ge
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license
 */

'use strict';

var gulp = require('gulp');
var paths = require('../utils/paths');

gulp.task('watch', function() {
  gulp.watch(paths.node.js, ['lint', 'style', 'test']);
});
