#!/usr/bin/env node

/**
 * https://github.com/ricardo-rossi/ge
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license.
 */

"use strict";

var generate = require('./../generate');

var argv = require('optimist')
  .usage([
    'USAGE: $0 -t [/path/to/template]',
    'Generate code, config files, or anything you want!']
    .join('\n\n'))
  .option('port', {
    alias: 'p',
    'default': 9081,
    description: 'TCP port at which the files will be served'
  })
  .option('help', {
    alias: 'h',
    description: 'display this help message'
  })
  .argv;

if (argv.help) {
  require('optimist').showHelp(console.log);
  process.exit(0);
}



