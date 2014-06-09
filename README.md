# octet - AbsurdJS's template engine

[![Build Status](https://travis-ci.org/tunnckoCore/octet.png)](https://travis-ci.org/tunnckoCore/octet) [![Dependencies Status](https://david-dm.org/tunnckoCore/octet/status.svg)](https://david-dm.org/tunnckoCore/octet)

> Template engine in just 20 lines, for browser and node. Developed for [AbsurdJS](https://github.com/krasimir/absurd) library.

## Install

```
npm install octet
```

## Usage
```js
var octet = require('./index')
    fs = require('fs');

var html = octet('<p><%this.user.name%></p>', {user:{name:'John'}});
//=> <p>John</p>
console.log('Sync call response: ', html);

octet('<p><%this.uppercase(this.user.name)%></p>', {
  uppercase: function (str) {
    return str.toUpperCase();
  },
  user: {
    name: 'john uppercased'
  }
}, function (err, html) {
  if (err) console.log(err)
  //=> html == 'JOHN UPPERCASED'
  console.log('Async call response: ', html);
});
```

## Test, Bench, Example
First run `npm install` before run anything.
```
npm test
npm start
npm run bench
```


## MIT LICENSE
The MIT License (MIT)

Copyright (c) 2014 [Charlike Mike Reagent](https://github.com/tunnckoCore) ([@tunnckoCore](https://twitter.com/tunnckoCore)) - npm package
[Krasimir Tsonev](https://github.com/krasimir) ([@KrasimirTsonev](https://twitter.com/https://twitter.com/KrasimirTsonev)) - creator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.