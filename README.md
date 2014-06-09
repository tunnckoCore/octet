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

## Credit

[![Krasimir Tsonev](https://avatars3.githubusercontent.com/u/528677?s=144)](https://github.com/krasimir) | [![Charlike Mike Reagent](https://avatars2.githubusercontent.com/u/5038030?s=144)](https://github.com/tunnckoCore)
---|---
[Krasimir Tsonev](http://krasimirtsonev.com/blog) (creator) | [George Yanev](https://github.com/tunnckoCore) (npm)


## License
The MIT License (MIT) [@KrasimirTsonev](https://twitter.com/KrasimirTsonev)
