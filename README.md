# jQuery Dream Stream

A simple vertical list scroller plugin for jQuery.

## Installation

via npm:

```
$ npm install jquery-dreamstream
```

## Use

Wrap your `<ul>` of stream items in a container and call the `$.dreamStream()` method on it:

**HTML**:
```html
<div class="dream-stream">
  <ul>
    <li>Stream Item 1</li>
    <li>Stream Item 2</li>
    <li>Stream Item 3</li>
  </ul>
</div>
```

**Using with CommonJS**:
```js
var $ = require('jquery');
require('jquery-dreamstream')($);

$('.dream-stream').dreamStream();
```

**Using with script tags**:

To generate a script tag ready jQuery plugin, do:

```
$ npm install && npm run build
```

The compiled file will be output to `jquery.dreamstream.js`.

```html
<script src="path/to/jquery.js"></script>
<script src="jquery.dreamstream.js"></script>
<script>
  $('.dreamStream').dreamStream();
</script>
```

## Options

Alternatively, you can call `dreamStream()` with options:

```js
$('.dream-stream').dreamStream({
  interval     : 2000,
  speed        : 200,
  direction    : 'up',
  onAfterScroll: function() { console.log('hey, scroll just finished') }
});
```

## Events 

Trigger a `pause` event:

```js
$('.dream-stream').trigger('dreamStream:pause');
```

Trigger a `resume` event:

```js
$('.dream-stream').trigger('dreamStream:resume');
```
