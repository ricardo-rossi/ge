/**
 * https://github.com/ricardo-rossi/ge
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license
 */

'use strict';

var fs = require('fs');
var path = require('path');

var tasks = fs.readdirSync('./gulp/tasks/')
  .filter(function scriptFilter(name) {
    return /(\.(js)$)/i.test(path.extname(name));
  });

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
