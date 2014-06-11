var DreamStream = require('./lib/DreamStream.js');

/**
 * UMDified jQuery plugin
 */
(function(factory) {
if (typeof define === 'function' && define.amd) {
  // AMD. Register as an anonymous module.
  define(['jquery'], factory);
} else if (typeof exports === 'object') {
  // Node/CommonJS style for Browserify
  module.exports = factory;
} else {
  // Browser globals
  factory(jQuery);
}
}(function($) {
  $.fn.dreamStream = function(options) {
    return this.each(function() {
      var dreamStream = new DreamStream($(this), options);
      dreamStream.start();
    });
  };
}));
