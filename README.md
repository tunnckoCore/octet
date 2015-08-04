# [octet][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Javascript template engine in just 20 lines, for browser and node.  
Used in [AbsurdJS](http://absurdjs.com/).

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i octet --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var octet = require('octet')

var data = {
  planet: {
    earth: 'World'
  }
}
octet('<h1>Hello <% this.planet.earth %></h1>', data) //=> <h1>Hello World</h1>
octet('<h1>Hello <% this.planet.earth %></h1>', data, function (err, html) {
  console.log(html) //=> <h1>Hello World</h1>
})
```

You can also add helper functions, try using [template-helpers](https://github.com/jonschlinkert/template-helpers) or [utils](https://github.com/jonschlinkert/utils)

```js
var octet = require('octet')
var utils = require('utils')
var helpers = require('template-helpers')

var tpl = '<h1><% this.uppercase("foo") %></h1>'
octet(tpl, helpers._, function (err, res) {
  if (err) return console.error(err)
  console.log(err, res) //=> '<h1>FOO</h1>'
})

var template = '<h1><% this.sum([1, 2, 3]) %></h1>'
octet(template, utils._, function (err, res) {
  if (err) return console.error(err)
  console.log(err, res) //=> '<h1>6</h1>'
})
```

or without any libraries, but with **custom helpers**

```js
var octet = require('octet')

octet('<p><%this.uppercase(this.user.name)%></p>', {
  uppercase: function (str) {
    return str.toUpperCase()
  },
  user: {
    name: 'john uppercased'
  }
}, function (err, html) {
  if (err) return console.error(err)
  console.log(html) //=> 'JOHN UPPERCASED'
})
```


## Related
- [absurd](http://absurdjs.com/): JavaScript library with superpowers - http://absurdjs.com/
- [j140](https://github.com/tunnckoCore/j140): Javascript template engine in just 140 bytes, for browser and node - by Jed Schmidt
- [riot](https://muut.com/riotjs/): A React- like, 3.5K user interface library
- [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)
- [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/octet/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/octet
[npmjs-img]: https://img.shields.io/npm/v/octet.svg?label=octet

[license-url]: https://github.com/tunnckoCore/octet/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/octet
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/octet.svg

[travis-url]: https://travis-ci.org/tunnckoCore/octet
[travis-img]: https://img.shields.io/travis/tunnckoCore/octet.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/octet
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/octet.svg

[david-url]: https://david-dm.org/tunnckoCore/octet
[david-img]: https://img.shields.io/david/dev/tunnckoCore/octet.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg
