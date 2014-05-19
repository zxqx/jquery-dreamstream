# jQuery Dream Stream

A simple vertical list scroller plugin for jQuery.

## Installation

It can be installed via npm:

```
npm install jquery-dreamstream
```

or, alternatively just cloned via git:

```
git clone https://github.com/zakangelle/jquery-dreamstream.git
```

Can be used as a CommonJS module:

```js
require('jquery-dreamstream');
```

or loaded in by using a script tag:

```html
<script src="jquery-dreamstream/jquery-dreamstream.js"></script>
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
