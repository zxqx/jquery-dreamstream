var $           = require('jquery');
var DreamStream = require('./lib/DreamStream.js');

$.fn.dreamStream = function(options) {
  return this.each(function() {
    var dreamStream = new DreamStream($(this), options);
    dreamStream.start();
  });
};
