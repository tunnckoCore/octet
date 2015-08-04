/*!
 * octet <https://github.com/tunnckoCore/octet>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var octet = require('./index')
var fs = require('fs')

var user = {name: 'Charlike'}

test('octet:', function () {
  test('should callback(err) on invalid template (async)', function (done) {
    var template = '<p><%if (this.user) {%> invalid</p>'
    var locals = {user: user}
    octet(template, locals, function (err) {
      test.ifError(!err)
      test.ok(err._templateCode)
      test.ok(/Unexpected token/.test(err.message))
      test.equal(err.name, 'SyntaxError')
      done()
    })
  })
  test('should throw error on invalid template (sync)', function (done) {
    var template = '<p><%if (this.user) {%> invalid</p>'
    var locals = {user: user}

    function fixture () {
      octet(template, locals)
    }

    test.throws(fixture, SyntaxError)
    test.throws(fixture, /Unexpected token/)
    done()
  })
  test('should support locals', function (done) {
    var template = fs.readFileSync('./fixture.octet', 'utf8')
    var locals = {user: user}

    octet(template, locals, function (err, html) {
      test.ifError(err)
      test.equal(html, '<h1><p>Charlike</p></h1>')
      done()
    })
  })
  test('should support helpers', function (done) {
    var template = '<p><%this.uppercase(this.user.name)%></p>'
    var locals = {
      user: user,
      uppercase: function (str) {
        return str.toUpperCase()
      }
    }

    octet(template, locals, function (err, html) {
      test.ifError(err)
      test.equal(html, '<p>CHARLIKE</p>')
      done()
    })
  })
  test('should support sync call', function (done) {
    var template = '<p><%this.user.name%></p>'
    var locals = {user: user}
    var html = octet(template, locals)
    test.equal(html, '<p>Charlike</p>')
    done()
  })
})
