# color-type[![Build Status](https://travis-ci.org/hemanth/is-keyword.svg?branch=master)](https://travis-ci.org/hemanth/color-type)

> Helper function to detect the color type/model (HEX, RGB, HSL).

## Install

```sh
$ npm install --save color-type
```

```sh
$ bower install --save color-type
```

```sh
$ component install hemanth/color-type
```


## Usage

##### Node.js

```js
var ct = require('color-type');

cm.is('rgb(255,255,255)'); //'rgb'
cm.is('#FFF'); // 'hex'
cm.is('hsl(0,100%, 50%)'); // 'hsl'

cm.isHSL('hsl(0,100%, 50%)'); // true
cm.isRGB('rgb(255,255,255)'); // true
cm.isHEX('#FFF'); // true

```

## License

MIT © [Hemanth.HM](http://h3manth.com)
