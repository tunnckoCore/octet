(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"extend-shallow":2}],2:[function(require,module,exports){
'use strict';

var isObject = require('is-extendable');

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

},{"is-extendable":3}],3:[function(require,module,exports){
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NC4wLjAvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHRlbmQtc2hhbGxvdy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pcy1leHRlbmRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxuICogb2N0ZXQgPGh0dHBzOi8vZ2l0aHViLmNvbS90dW5uY2tvQ29yZS9vY3RldD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSBDaGFybGlrZSBNaWtlIFJlYWdlbnQgPEB0dW5uY2tvQ29yZT4gKGh0dHA6Ly93d3cudHVubmNrb2NvcmUudGspXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQtc2hhbGxvdycpXG5cbnZhciBvY3RldCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gb2N0ZXQgKCkge1xuICByZXR1cm4gb2N0ZXRGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKClcbn1cblxub2N0ZXQucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgcmV0dXJuIG9jdGV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxub2N0ZXQuY29tcGlsZSA9IGZ1bmN0aW9uIGNvbXBpbGUgKHN0cikge1xuICByZXR1cm4gb2N0ZXRGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbmZ1bmN0aW9uIG9jdGV0Rm4gKHN0ciwgbG9jYWxzKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgcmUgPSAvPCUoW14lPl0rKT8lPi9nXG4gICAgdmFyIHJlRXhwID0gLyheKCApPyhpZnxmb3J8ZWxzZXxzd2l0Y2h8Y2FzZXxicmVha3x7fH0pKSguKik/L2dcbiAgICB2YXIgY29kZSA9ICd2YXIgcj1bXTtcXG4nXG4gICAgdmFyIHJlcyA9IG51bGxcblxuICAgIGZ1bmN0aW9uIGFkZCAobGluZSwganNDb2RlKSB7XG4gICAgICBqc0NvZGVcbiAgICAgICAgPyAoY29kZSArPSBsaW5lLm1hdGNoKHJlRXhwKSA/IGxpbmUgKyAnXFxuJyA6ICdyLnB1c2goJyArIGxpbmUgKyAnKTtcXG4nKVxuICAgICAgICA6IChjb2RlICs9IGxpbmUgJiYgbGluZS5sZW5ndGggPyAnci5wdXNoKFwiJyArIGxpbmUucmVwbGFjZSgvXCIvZywgJ1wiJykgKyAnXCIpO1xcbicgOiAnJylcbiAgICAgIHJldHVybiBhZGRcbiAgICB9XG5cbiAgICB2YXIgY3Vyc29yID0gMFxuICAgIHZhciBtYXRjaCA9IG51bGxcbiAgICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgYWRkKHN0ci5zbGljZShjdXJzb3IsIG1hdGNoLmluZGV4KSkobWF0Y2hbMV0sIHRydWUpXG4gICAgICBjdXJzb3IgPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aFxuICAgIH1cblxuICAgIGFkZChzdHIuc3Vic3RyKGN1cnNvciwgc3RyLmxlbmd0aCAtIGN1cnNvcikpXG4gICAgY29kZSArPSAncmV0dXJuIHIuam9pbihcIlwiKTsnXG5cbiAgICB0cnkge1xuICAgICAgdmFyIGN0eCA9IGV4dGVuZChsb2NhbHMsIGRhdGEsIHRoaXMgfHwgc2VsZilcbiAgICAgIHZhciBGdW5jID0gRnVuY3Rpb24gLy8gc3VwcHJlc3MgYGVzbGludGAsIGBqc2hpbnRgIGFuZCBldGNcbiAgICAgIHJlcyA9IG5ldyBGdW5jKGNvZGUucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgJycpKS5jYWxsKGN0eClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVyci5fdGVtcGxhdGVDb2RlID0gY29kZVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoby8qLCBvYmplY3RzKi8pIHtcbiAgaWYgKCFpc09iamVjdChvKSkgeyBvID0ge307IH1cblxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgYXNzaWduKG8sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufTtcblxuZnVuY3Rpb24gYXNzaWduKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoaGFzT3duKGIsIGtleSkpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBrZXlgIGlzIGFuIG93biBwcm9wZXJ0eSBvZiBgb2JqYC5cbiAqL1xuXG5mdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4iLCIvKiFcbiAqIGlzLWV4dGVuZGFibGUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGVuZGFibGU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRlbmRhYmxlKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsICE9PSBudWxsXG4gICAgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xufTtcbiJdfQ==
