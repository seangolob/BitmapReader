'use strict';

module.exports = function(file) {

  var bitmapObject = {};

  bitmapObject.type = file.toString('utf-8', 0, 2);
  bitmapObject.size = file.readInt32LE(2);
  bitmapObject.startOfPixels = file.readInt32LE(10);
  bitmapObject.width = file.readInt32LE(18);
  bitmapObject.height = file.readInt32LE(22);
  bitmapObject.colorDepth = file.readInt16LE(28);
  bitmapObject.paletSize = file.readInt32LE(46);

  return bitmapObject;
};

