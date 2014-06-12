var test        = require('tape');
var jsdom       = require('jsdom');
var DreamStream = require('../lib/DreamStream.js');

test('Throws on bad element param', function(t) {
  t.plan(1);

  t.throws(function() {
    var dreamStream = new DreamStream(null);
  });
});
