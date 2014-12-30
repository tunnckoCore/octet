## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url]

> Javascript template engine in just 20 lines, for browser and node.  
Used in [AbsurdJS](https://github.com/krasimir/absurd) by [Krasimir Tsonev](http://krasimirtsonev.com).

## Install
```bash
npm install octet
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var octet = require('octet');

var html = octet('<p><%this.user.name%></p>', {user:{name:'John'}});
//=> <p>John</p>
console.log('Sync call response: ', html);
```
You can also add helper functions like so (+async variant):
```js
var octet = require('octet');

octet('<p><%this.uppercase(this.user.name)%></p>', {
  uppercase: function (str) {
    return str.toUpperCase();
  },
  user: {
    name: 'john uppercased'
  }
}, function (err, html) {
  if (err) {
    return console.error(err);
  }
  //=> html === 'JOHN UPPERCASED'
  console.log('Async call response: ', html);
});
``` 



## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Copyright (c) 2014 [Krasimir Tsonev](http://krasimirtsonev.com/blog), [@KrasimirTsonev](https://twitter.com/KrasimirTsonev).  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/octet
[npmjs-img]: https://img.shields.io/npm/v/octet.svg?style=flat&label=octet

[coveralls-url]: https://coveralls.io/r/tunnckoCore/octet?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/octet.svg?style=flat

[license-url]: https://github.com/tunnckoCore/octet/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/octet
[travis-img]: https://img.shields.io/travis/tunnckoCore/octet.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/octet
[daviddm-img]: https://img.shields.io/david/tunnckoCore/octet.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/octet/graphs/contributors

***

_Powered and automated by [readdirp + hogan.js](https://github.com/tunnckoCore), December 30, 2014_
