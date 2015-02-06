'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');
var bmpUtils = require('./lib/bitmap');
var transform = require('./lib/transform');


if(process.argv[2]) {

  var header = bmpUtils(bitmap);
  transform(bitmap);

}


