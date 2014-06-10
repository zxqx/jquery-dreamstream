var DreamStream = require('./lib/DreamStream.js');

(function($) {
  $.fn.dreamStream = function(options) {
    return new DreamStream(this, options);
  };

})(jQuery);
