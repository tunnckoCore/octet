/*!
 * octet <https://github.com/tunnckoCore/octet>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var re = /<%([^%>]+)?%>/g
var reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g
var Func = Function // suppress `eslint`, `jshint` and etc

function octet (html, locals, done) {
  var code = 'var r=[];\n'
  var cursor = 0
  var result = null
  var callback = typeof done === 'function' ? done : null

  function add (line, jsCode) {
    jsCode
      ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n')
      : (code += line && line.length ? 'r.push("' + line.replace(/"/g, '"') + '");\n' : '')
    return add
  }

  var match = null
  while ((match = re.exec(html)) !== null) {
    add(html.slice(cursor, match.index))(match[1], true)
    cursor = match.index + match[0].length
  }

  add(html.substr(cursor, html.length - cursor))
  code += 'return r.join("");'

  try {
    result = new Func(code.replace(/[\r\t\n]/g, '')).call(locals, locals)
  } catch(err) {
    err._templateCode = code
    if (callback) {
      return callback(err)
    } else {
      throw err
    }
  }

  return callback ? callback(null, result) : result
}

module.exports = octet
