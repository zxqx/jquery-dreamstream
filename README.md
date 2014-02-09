# jQuery Dream Stream

## Installation

It can be installed via npm:

```
npm install jquery-dreamstream
```

or, alternatively just cloned via git:

```
git clone git@github.com:zakangelle/jquery-dreamstream.git
```

jQuery Dream Stream can be used as a CommonJS module:

```js
require('jquery-dreamstream');
```

or loaded in by just using a script tag:

```html
<script src="jquery-dreamstream/jquery-dreamstream.js"></script>
```

## Use

To use the plugin, just select the element you'd like to stream and call the `dreamStream()` method on it:

```js
$('.stream').dreamStream();
```

Alternatively, you can call `dreamStream()` with options:

```js
$('.stream').dreamStream({
  interval     : 2000,
  speed        : 200,
  onAfterScroll: function() { alert('hey, scroll just finished') })
});
```
