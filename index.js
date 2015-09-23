/*!
 * octet <https://github.com/tunnckoCore/octet>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var extend = require('extend-shallow')

var octet = module.exports = function octet () {
  return octetFn.apply(this, arguments)()
}

octet.render = function render () {
  return octet.apply(this, arguments)
}

octet.compile = function compile (str) {
  return octetFn.apply(this, arguments)
}

function octetFn (str, locals) {
  var self = this
  return function (data) {
    var re = /<%([^%>]+)?%>/g
    var reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g
    var code = 'var r=[];\n'
    var res = null

    function add (line, jsCode) {
      jsCode
        ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n')
        : (code += line && line.length ? 'r.push("' + line.replace(/"/g, '"') + '");\n' : '')
      return add
    }

    var cursor = 0
    var match = null
    while ((match = re.exec(str)) !== null) {
      add(str.slice(cursor, match.index))(match[1], true)
      cursor = match.index + match[0].length
    }

    add(str.substr(cursor, str.length - cursor))
    code += 'return r.join("");'

    try {
      var ctx = extend(locals, data, this || self)
      var Func = Function // suppress `eslint`, `jshint` and etc
      res = new Func(code.replace(/[\r\t\n]/g, '')).call(ctx)
    } catch (err) {
      err._templateCode = code
      throw err
    }

    return res
  }
}
