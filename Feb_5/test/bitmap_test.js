'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var object = require('../lib/bitmap');
var transform = require('../lib/transform');


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

describe('transform', function(){

  it('should create an array of equal length', function(){
    expect(transform(bitmap)[0].length).to.eql(transform(bitmap)[1].length);
  });

});
