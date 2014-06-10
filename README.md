# jQuery Dream Stream

A simple vertical list scroller plugin for jQuery.

## Installation

via npm:

```
$ npm install jquery-dreamstream
```

## Use

Wrap your `<ul>` of stream items in a container and call the `dreamStream()` method on the container element:

**Markup**
```html
<div class="dream-stream">
  <ul>
    <li>Stream Item 1</li>
    <li>Stream Item 2</li>
    <li>Stream Item 3</li>
  </ul>
</div>
```

**JS**
```js
var $ = require('jquery');
require('jquery-dreamstream');

$('.dream-stream').dreamStream();
```

Alternatively, you can call `dreamStream()` with options:

```js
$('.dream-stream').dreamStream({
  interval     : 2000,
  speed        : 200,
  direction    : 'up',
  onAfterScroll: function() { console.log('hey, scroll just finished') }
});
```
