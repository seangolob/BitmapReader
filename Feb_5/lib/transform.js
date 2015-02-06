'use strict';

var fs = require('fs');

module.exports = function transform(file) {
  var pixelArray = [];

  for (var i = 1078; i < 11078; i++) {
    var pixelKey = file.readInt8(i);
    pixelArray.push(pixelKey);
  }

  var newArray = [];

  for (i = 0; i < pixelArray.length; i++){
    if (pixelArray[i] == 256) {
      newArray[i] = 0;
      continue;
    }
    newArray[i] = pixelArray[i] + 1;
  }

  for (i = 1078; i < 11078; i++) {
    file.writeInt8(newArray[i - 1078], i);
  }

  fs.writeFileSync('new.bmp', file);
};
