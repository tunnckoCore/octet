# [octet][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> 1kb template engine for the browser and nodejs. Support helpers, partials and more.  
Used in [AbsurdJS Apps](http://absurdjs.com/).

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i octet --save
```


## Features
- minimal, yet simple
  + 845 bytes - browserified, gzipped and minified
  + 1676 bytes - browserified and minified
- zero dependencies
- works on every browser, should **even works on IE6 or at least IE8**
- works on the server with just `require('octet')`
- plays well with [Browserify](https://browserify.org) and [BrowserifyCDN](https://brcdn.org)
- support helpers and partials
- available on CDNs - [BrowserifyCDN](https://www.brcdn.org/?module=octet&version=list) and [RawGit CDN](https://rawgit.com/)


## Use it
- [dist/octet.min.js](./dist/octet.min.js) (*1.6kb*)
- [dist/octet.standalone.min.js](./dist/octet.standalone.min.js) (*1.9kb*)
- [octet on BrowserifyCDN](https://www.brcdn.org/?module=octet&version=list)
- [octet on RawGit CDN](https://cdn.rawgit.com/tunnckoCore/octet/master/dist/octet.standalone.min.js)


## Usage
> For more use-cases see the [tests](./test.js).  
You can use any "helpers" lib, for example [utils](https://github.com/jonschlinkert/utils).

```js
var octet = require('octet')
var utils = require('utils')

octet.render('foo <%this.uppercase("bar")%> baz', utils._)
//=> 'foo BAR baz'
```

### [octet](./index#L12)
> Acts like `.render` by default. Renders given `str` with `locals`.

- `str` **{String}** template to populate with `locals`
- `locals` **{Object}** locals object
- `returns` **{String}** rendered string

**Example**

```js
octet('foo <%this.bar%> baz <%this.quux%>', {bar: 'bar', quux: 'QUUX'})
//=> 'foo bar baz QUUX'
```

### [.render](./index#L16)
> Renders given `str` with `locals`.

- `str` **{String}** template to populate with `locals`
- `locals` **{Object}** locals object
- `returns` **{String}** rendered string

**Example**

```js
octet.render('Hello <%this.place%> and <%this.user.name%>!', {
  place: 'world',
  user: {
    name: 'Charlike'
  }
})
//=> 'Hello world and Charlike!'
```

### [.compile](./index#L20)
> Compiles given string and returns function which accepts `locals` object.

- `str` **{String}** template to populate
- `returns` **{Function}** which accepts `locals` objects

**Example**

```js
var fn = octet.compile('Hello <%this.place%> and <%this.user.name%>!')
fn({place: 'world', user: {name: 'Charlike'}})
//=> 'Hello world and Charlike!'
```


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
[david-img]: https://img.shields.io/david/tunnckoCore/octet.svg

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

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg