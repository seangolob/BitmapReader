'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var object = require('../lib/bitmap');


var bitmap = fs.readFileSync('test.bmp');

describe('object maker', function() {

  it('should return an object', function(){
    expect(object(bitmap)).to.be.an('object');
  });

  it('should return an object with a property called paletSize', function(){
    expect(object(bitmap)).to.have.ownProperty('paletSize');
  });

  it('should have a bitmap object with type property BM', function(){
    expect(object(bitmap)).to.have.property('type', 'BM');
  });
});
