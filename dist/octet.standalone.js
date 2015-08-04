(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.octet = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcbiAqIG9jdGV0IDxodHRwczovL2dpdGh1Yi5jb20vdHVubmNrb0NvcmUvb2N0ZXQ+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IENoYXJsaWtlIE1pa2UgUmVhZ2VudCA8QHR1bm5ja29Db3JlPiAoaHR0cDovL3d3dy50dW5uY2tvY29yZS50aylcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIHJlID0gLzwlKFteJT5dKyk/JT4vZ1xudmFyIHJlRXhwID0gLyheKCApPyhpZnxmb3J8ZWxzZXxzd2l0Y2h8Y2FzZXxicmVha3x7fH0pKSguKik/L2dcbnZhciBGdW5jID0gRnVuY3Rpb24gLy8gc3VwcHJlc3MgYGVzbGludGAsIGBqc2hpbnRgIGFuZCBldGNcblxuZnVuY3Rpb24gb2N0ZXQgKGh0bWwsIGxvY2FscywgZG9uZSkge1xuICB2YXIgY29kZSA9ICd2YXIgcj1bXTtcXG4nXG4gIHZhciBjdXJzb3IgPSAwXG4gIHZhciByZXN1bHQgPSBudWxsXG4gIHZhciBjYWxsYmFjayA9IHR5cGVvZiBkb25lID09PSAnZnVuY3Rpb24nID8gZG9uZSA6IG51bGxcblxuICBmdW5jdGlvbiBhZGQgKGxpbmUsIGpzQ29kZSkge1xuICAgIGpzQ29kZVxuICAgICAgPyAoY29kZSArPSBsaW5lLm1hdGNoKHJlRXhwKSA/IGxpbmUgKyAnXFxuJyA6ICdyLnB1c2goJyArIGxpbmUgKyAnKTtcXG4nKVxuICAgICAgOiAoY29kZSArPSBsaW5lICYmIGxpbmUubGVuZ3RoID8gJ3IucHVzaChcIicgKyBsaW5lLnJlcGxhY2UoL1wiL2csICdcIicpICsgJ1wiKTtcXG4nIDogJycpXG4gICAgcmV0dXJuIGFkZFxuICB9XG5cbiAgdmFyIG1hdGNoID0gbnVsbFxuICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhodG1sKSkgIT09IG51bGwpIHtcbiAgICBhZGQoaHRtbC5zbGljZShjdXJzb3IsIG1hdGNoLmluZGV4KSkobWF0Y2hbMV0sIHRydWUpXG4gICAgY3Vyc29yID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGhcbiAgfVxuXG4gIGFkZChodG1sLnN1YnN0cihjdXJzb3IsIGh0bWwubGVuZ3RoIC0gY3Vyc29yKSlcbiAgY29kZSArPSAncmV0dXJuIHIuam9pbihcIlwiKTsnXG5cbiAgdHJ5IHtcbiAgICByZXN1bHQgPSBuZXcgRnVuYyhjb2RlLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcnKSkuY2FsbChsb2NhbHMsIGxvY2FscylcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBlcnIuX3RlbXBsYXRlQ29kZSA9IGNvZGVcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayA/IGNhbGxiYWNrKG51bGwsIHJlc3VsdCkgOiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvY3RldFxuIl19
