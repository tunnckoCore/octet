/**
 * octet <https://github.com/tunnckoCore/octet>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var octet = require('./index');
var assert = require('assert');
var user = {name: 'Charlike'};
var fs = require('fs');

describe('octet:', function() {
  it('should support locals', function(done) {
    var template = fs.readFileSync('./fixture.octet').toString();
    var locals = {user: user};
    octet(template, locals, function(err, html) {
      if (err) {
        return done(err);
      }
      assert.strictEqual(html, '<p>Charlike</p>');
      done();
    })
  });
  it('should support helpers', function(done) {
    var template = '<p><%this.uppercase(this.user.name)%></p>';
    var locals = {
      user: user,
      uppercase: function(str) {
        return str.toUpperCase();
      }
    };

    octet(template, locals, function(err, html) {
      if (err) {
        return done(err);
      }
      assert.strictEqual(html, '<p>CHARLIKE</p>');
      done();
    });
  });
  it('should support sync call', function(done) {
    var template = '<p><%this.user.name%></p>';
    var locals = {user: user};

    var sync = octet(template, locals);
    if (sync.err === null) {
      assert.strictEqual(sync.res, '<p>Charlike</p>');
      done()
    } else {
      done(sync.err)
    }
  });
  it('should support caching', function(done) {
    var template = fs.readFileSync('./fixture.octet').toString();
    var locals = {user: user, cache: true};

    octet(template, locals, function(err, html) {
      if (err) {
        return done(err);
      }

      fs.readFile = function(path) {
        done(new Error('fs.readFile() called with path:'));
      };
      assert.strictEqual(html, '<p>Charlike</p>');

      octet(template, locals, function(err, html) {
        if (err) {
          return done(err);
        }
        assert.strictEqual(html, '<p>Charlike</p>');
        done();
      });
    });
  });
});
