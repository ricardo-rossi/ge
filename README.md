# ge - The Code Generator

Generate code, config files, or anything you want! 

[![NPM](https://nodei.co/npm/ge.png?downloads=true)](https://nodei.co/npm/ge/)  
[![NPM version](https://badge.fury.io/js/ge.svg)](http://badge.fury.io/js/ge)
[![Travis](https://travis-ci.org/ricardo-rossi/ge.svg?branch=master)](https://travis-ci
.org/ricardo-rossi/ge)

## Overview

The goal of this project is to provide an easy to use mechanism for generating common boilerplate 
code, regardless of which programming language or functionality it provides. This project should 
also provide an easy way for developers to to plug in new code templates and 
tasks for generating just about any kind of code. 


## Prerequisites

Install the dependencies for this project:  

* Node.js &mdash; [http://nodejs.org/](http://nodejs.org)
* npm &mdash; [https://www.npmjs.org/](https://www.npmjs.org/)
* Bower &mdash; `npm install -g bower`
* Gulp &mdash; `npm install -g gulp`

If you are having issues please see [How to install Node.js and npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm)


## Getting Started  

Install ge using the -g (global) flag   
```
npm install -g ge
```

## Usage

```
ge -t relative/path/to/template
```

Generated files will be placed under ./build relative to your current dir.


## Examples

Please see some template examples in the /samples directory  


## Running The Examples

Copy the /samples folder to your current directory and run any of the examples like this:

```
ge -t samples/1_hello
ge -t samples/2_filename
ge -t samples/3_filename_var
ge -t samples/4_helper
ge -t samples/5_iterator
ge -t samples/6_conditional
```

The generated files will be placed under the ./build directory (relative to your current dir)


## Attributions
 
Static generation by [Metalsmith](https://github.com/segmentio/metalsmith)


## License

Created by: [Ricardo Rossi](https://github.com/ricardo-rossi)  


Licensed under the [MIT license](LICENSE)
