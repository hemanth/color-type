'use strict';
var assert = require('assert');
var cm = require('./index');

it("should report proper color model.", function() {
  assert.equal(cm.is('rgb(255,255,255)'), 'rgb');
  assert.equal(cm.is('#FFF'), 'hex');
  assert.equal(cm.is('hsl(0,100%, 50%)'), 'hsl');
});