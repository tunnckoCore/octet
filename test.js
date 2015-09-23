/*!
 * octet <https://github.com/tunnckoCore/octet>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var octet = require('./index')
var utils = require('utils')

test('should throw if not `this.` is used', function (done) {
  function fixture () {
    octet.render('foo <%qux%> baz', {qux: 'BAR'})
  }

  test.throws(fixture, ReferenceError)
  test.throws(fixture, /qux is not defined/)
  done()
})

test('should octet() render a string with locals', function (done) {
  var html = octet('<div>Hello <%this.place%> and <%this.user.name%>!</div>', {
    place: 'world',
    user: {
      name: 'Charlike'
    }
  })

  test.strictEqual(html, '<div>Hello world and Charlike!</div>')
  done()
})

test('should octet.compile() return function', function (done) {
  var fn = octet.compile('foo <%this.bar%> baz')
  test.strictEqual(typeof fn, 'function')
  test.strictEqual(fn({bar: 'BAR'}), 'foo BAR baz')
  done()
})

test('should octet.render() be same as octet()', function (done) {
  var res = octet.render('foo <%this.bar%> baz', {bar: 'QUUX'})
  test.strictEqual(res, 'foo QUUX baz')
  done()
})

test('should merge custom context passed to .compile and locals', function (done) {
  var str = 'foo <%this.bar%> and <%this.ctx%>, yesh!'
  var render = octet.compile.call({ctx: 'context'}, str)
  var res = render({bar: 'BAR'})
  test.strictEqual(res, 'foo BAR and context, yesh!')
  done()
})

test('should merge custom context passed to .render and locals', function (done) {
  var str = 'foo <%this.bar%> and <%this.ctx%>, yesh!'
  var res = octet.render.call({ctx: '.render'}, str, {bar: 'BAR'})
  test.strictEqual(res, 'foo BAR and .render, yesh!')
  done()
})

test('should merge custom context passed to returned fn and locals', function (done) {
  var str = 'foo <%this.bar%> and <%this.ctx%>, yesh!'
  var render = octet.compile(str)
  var res = render.call({ctx: 'from render'}, {bar: 'BAR'})
  test.strictEqual(res, 'foo BAR and from render, yesh!')
  done()
})

test('should work with custom helpers', function (done) {
  var str = 'foo <%this.uppercase("bar")%> baz'
  var res = octet.render(str, {uppercase: function (str) {
    return str.toUpperCase()
  }})

  test.strictEqual(res, 'foo BAR baz')
  done()
})

test('should be able to use `utils` lib as helpers ', function (done) {
  var str = 'foo <%this.truncate("bar baz", 5)%> baz'
  var res = octet.render(str, utils.string)

  test.strictEqual(res, 'foo bar b baz')
  done()
})
