'use strict';

var should = require('chai').should();
var ozbcore = require('../');

describe('#versionGuard', function() {
  it('global._ozbcore should be defined', function() {
    should.equal(global._ozbcore, ozbcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      ozbcore.versionGuard('version');
    }).should.throw('More than one instance of ozbcore');
  });
});
