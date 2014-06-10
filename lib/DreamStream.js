module.exports = DreamStream;

var $ = require('jquery');

/**
 * @param {object} el jQuery wrapped DOM element
 * @param {object} options A set of config overrides 
 */
function DreamStream(el, options)
{
  this._started       = false;
  this.paused         = false;
  this.activeItem     = null;
  this.scrollInterval = null;

  this.$element = el;
  this.$list    = this.getList();

  // Store a reference to runtime option overrides
  this._options = options;

  // Merge runtime options with defaults
  this.options  = $.extend({}, DreamStream.DEFAULTS, options);
}

DreamStream.DEFAULTS = {
  interval      : 6000,
  speed         : 600,
  direction     : 'down',
  onAfterScroll : null
};

/**
 * Set up the stream with all the scrolly goodness 
 */
DreamStream.prototype.start = function()
{
  if (this._started)
    throw new Error('Dream stream already running on this element');

  this._started = true;

  var direction = this.options.direction;
  var interval  = this.options.interval;

  // Set first item as active
  this.setActiveItem(0);

  // Initiate the scrolling
  var self = this;
  this.scrollInterval = setInterval(function() {
    self.scroll(direction);
  }, interval);
};

/**
 * External method for pausing stream
 */
DreamStream.prototype.pause = function()
{
  this.paused = true;
};

/**
 * External method for resuming stream
 */
DreamStream.prototype.resume = function()
{
  this.paused = false;
};

/**
 * @param {string} direction
 */
DreamStream.prototype.scroll = function(direction)
{
  if (this.paused) return;

  this.$list = this.getList();
  var px     = this.getAmountToScroll();

  if (direction === 'up') this.scrollUp(px);
  else if (direction === 'down') this.scrollDown(px);
};

/**
 * Scroll the list up a given amount of pixels
 * @param {string} px
 */
DreamStream.prototype.scrollUp = function(px)
{
  var lastItem = this.getLastItem();
  var options  = this.options;

  this.$list
    .css({
      position: 'relative',
      top: '-' + px + 'px'
    })
    .prepend(lastItem);
  
  var self = this;

  // Do the scrolling magic
  this.$list
    .css({ position: 'relative' })
    .animate({ top: 0 },
      options.speed, function() {

        self.setActiveItem(0);

        if (options.onAfterScroll)
          options.onAfterScroll();
      });
};

/**
 * Scroll the list down and reorder the list after scrolling
 * @param {string} px
 */
DreamStream.prototype.scrollDown = function(px)
{
  var options = this.options;

  var self = this;

  // Do the scrolling magic
  this.$list
    .css({ position: 'relative' })
    .animate({ top: px },
      options.speed, function() {

        // After scrolling is done, move the first element to the end
        // and reset the top CSS val
        self.$list
          .append(self.getListItems().first())
          .css({ top: 0 });

        self.setActiveItem(0);

        if (options.onAfterScroll)
          options.onAfterScroll();
      });
};

/**
 *  @return {object} jQuery-wrapped DOM element of the <ul>
 */
DreamStream.prototype.getList = function()
{
  return this.$element.find('ul');
};

/**
 * @return {object} jQuery-wrapped DOM element of the <li> elements 
 */
DreamStream.prototype.getListItems = function()
{
  return this.getList().children();
};

/**
 * @return {object} jQuery-wrapped DOM element of the currently active item
 */
DreamStream.prototype.getActiveItem = function()
{
  return this.activeItem;
};

/**
 * @return {object} jQuery-wrapped DOM element of the last stream item
 */
DreamStream.prototype.getLastItem = function()
{
  return this.getListItems().last();
};

DreamStream.prototype.getAmountToScroll = function()
{
  var amountToScroll = 0;

  if (this.options.direction === 'up')
    amountToScroll = this.getLastItem().outerHeight() + 'px';
  else if (this.options.direction === 'down')
    amountToScroll = '-' + (this.getActiveItem().outerHeight()) + 'px'; 

  return amountToScroll;
};

/**
 * Set the active stream item to the item of the given index
 * @param {number} index
 */
DreamStream.prototype.setActiveItem = function(index)
{
  var $items = this.getListItems();
  this.activeItem = $items.eq(index);

  $items.removeClass('active-stream-item');
  this.activeItem.addClass('active-stream-item');
};
