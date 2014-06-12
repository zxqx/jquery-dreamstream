var test        = require('tape');
var jsdom       = require('jsdom');
var DreamStream = require('../lib/DreamStream.js');

test('Throws on bad element param', function(t) {
  t.plan(1);

  t.throws(function() {
    var dreamStream = new DreamStream(null);
  });
});

test('Get stream list', function(t) {
  t.plan(1);
  
  jsdom.env(
    '<div class="dream-stream">' +
      '<ul>' +
        '<li>Stream Item 1</li>' +
        '<li>Stream Item 2</li>' +
        '<li>Stream Item 3</li>' +
      '</ul>' +
    '</div>',
    ['../node_modules/jquery/dist/jquery.min.js'],
    function(errors, window) {
      var dreamStream = new DreamStream(window.$('.dream-stream'));
      t.true(dreamStream.getList().is('ul'));
    }
  );
});

test('Get stream items', function(t) {
  t.plan(2);
  
  jsdom.env(
    '<div class="dream-stream">' +
      '<div class="some-other-shit"></div>' +
      '<ul>' +
        '<li>Stream Item 1</li>' +
        '<li>Stream Item 2</li>' +
        '<li>Stream Item 3</li>' +
      '</ul>' +
      '<ol>' +
        '<li>Somethin<li>' +
      '</ol>' +
    '</div>',
    ['../node_modules/jquery/dist/jquery.min.js'],
    function(errors, window) {
      var dreamStream = new DreamStream(window.$('.dream-stream'));
      var listItems = dreamStream.getListItems();
      t.strictEquals(listItems.length, 3);

      listItems.each(function(i, el) {
        if (el.tagName !== 'LI')
          t.fail();

        if (i === (listItems.length-1))
          t.pass();
      });
    }
  );
});
