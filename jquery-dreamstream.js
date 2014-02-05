(function($) {
  $.fn.dreamStream = function(options) {

    var activeItem = null;
    var scrolling  = true;

    // Some defaults
    var defaults = {
      interval     : 6000,
      speed        : 600,
      onAfterScroll: null
    };

    // Merge runtime options with defaults
    options = $.extend({}, defaults, options);

    $.fn.dreamStream.pause = function()
    {
      scrolling = false;
    };

    $.fn.dreamStream.resume = function()
    {
      scrolling = true;
    };

    // TODO - Make sure this shit only gets called once
    return this.each(function() {
      var $element   = $(this);
      var $container = $element.find('ul');

      setActiveItem(0);

      var scroll = setInterval(scrollDown, options.interval);

      function scrollDown()
      {
        if (!scrolling) return;

        if (!$element.is(':visible')) {
          clearInterval(scroll);
          return;
        }

        var $container   = $element.find('ul');
        var scrollAmount = getAmountToScroll();

        // Do the scrolling magic
        $container
          .css({ position: 'relative' })
          .animate({ top: scrollAmount },
            options.speed, function() {

              // After scrolling is done, move the first element to the end
              // and reset the top CSS val
              $container
                .append(getItems().first())
                .css({ top: 0 });

              setActiveItem(0);

              if (options.onAfterScroll)
                options.onAfterScroll();
            });
      }

      // TODO - Meths hangin off the plugin function
      function getItems()
      {
        return $container.children();
      }

      function getAmountToScroll()
      {
        // Get that +30 shit outta there
        return '-' + (getActiveItem().height() + 30) + 'px';
      }

      function getActiveItem()
      {
        return activeItem;
      }

      function setActiveItem(index)
      {
        var $items = getItems();
        activeItem = $items.eq(index);

        $items.removeClass('active-stream-item');
        activeItem.addClass('active-stream-item');
      }
    });
  };

})(jQuery);