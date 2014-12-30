/**
 * octet <https://github.com/tunnckoCore/octet>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

 'use strict';

var octet = require('../index');

/**
 * Sync version without helpers, only locals
 */
var html = octet('<p><%this.user.name%></p>', {user:{name:'John'}});
//=> <p>John</p>
console.log('Sync call response: ', html);

/**
 * Async with uppercase helper
 */
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
