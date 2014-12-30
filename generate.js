/**
 * https://github.com/ricardo-rossi/ge
 *
 * Copyright (c) 2014 Ricardo Rossi, contributors
 * Licensed under the MIT license
 */

'use strict';
/*jshint -W089 */

/*
 * Required modules
 */
var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');
var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var _ = require('underscore');
var argv = require('minimist')(process.argv.slice(2));

/*
 * Local variables
 */
var configFile = 'config.json';
var buildPath = './build';
var varDelimiter = '$';
var templateName = argv.t;
var config;
var configPath;
var fileNames = [];

/*
 * CLI parameters
 */
if (templateName) {
  var templatePath = templateName;
  if (!fs.existsSync(templatePath)) {
    console.error('Template not found in ' + templatePath);
    process.exit();
  }
  configPath = templatePath + path.sep + configFile;
  if (fs.existsSync(configPath)) {
    config = require(process.cwd() + path.sep + configPath);
  }
  if (!config) {
    console.error('Configuration file not found in ' + configPath);
    process.exit();
  }
} else {
  console.error('Specify template name using "ge -t /path/to/template"');
  process.exit();
}

/*
 * Custom Handlebars Helpers
 */
Handlebars.registerHelper('toLowerCase', function(str) {
  if (!str) return;
  return str.toLowerCase();
});

Handlebars.registerHelper('toUpperCase', function(str) {
  if (!str) return;
  return str.toUpperCase();
});

Handlebars.registerHelper('toTitleCase', function(str) {
  if (!str) return;
  return str.replace(/\b\w/g, function(txt) {
    return txt.toUpperCase();
  });
});

Handlebars.registerHelper('toCamelCase', function(str) {
  if (!str) return;
  return str.replace(/^.|-./g, function(letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.substr(1).toUpperCase();
  });
});

/*
 * Extract filename from YAML section
 */
function yamlPlugin() {
  return function(files, metalsmith, done) {
    for (var file in files) {
      fileNames.push({file: file, filename: files[file].filename});
    }
    done();
  };
}

/*
 * Generate code
 */
function run(done) {
  new Metalsmith('.')
    .source(templatePath)
    .use(templates({
      engine: 'handlebars',
      inPlace: true
    }))
    .use(yamlPlugin())
    .metadata(config)
    .build(function(err) {
      if (err) {
        console.error(err);
        throw err;
      }
      cleanUp();
      console.log('Code generated using template: ' + templateName);
      console.log('See output under: ' + buildPath + '\n');
      done();
    });
}

run(function() {
});

/*
 * Cleaning up after build
 */
function cleanUp() {
  _.each(fileNames, function(item, key, list) {
    var filePath = buildPath + path.sep + item.file;
    if (item.filename) {
      fs.rename(filePath, buildPath + path.sep + getFileName(item.filename));
    }
    if (item.file === configFile) {
      fs.unlink(filePath);
    }
  });
}

function getFileName(filename) {
  var varName = extractVariableName(filename);
  if (config[varName]) {
    filename = filename.replace(varDelimiter + varName + varDelimiter, config[varName]);
  }
  return filename;
}

function extractVariableName(filename) {
  var startVar = filename.indexOf(varDelimiter);
  if (startVar < 0) {
    return;
  }
  var endVar = filename.indexOf(varDelimiter, startVar + 1);
  if (endVar > startVar) {
    var varName = filename.substr(startVar, endVar - startVar);
    return varName.replace(/\$/g, '');
  }
}
