!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.colorType=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var matchers = {
  hsl: /^hsla?\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*(,\s*[\d\.]+)?\s*\)$/,
  rgb: /^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(,\s*[\d\.]+)?\s*\)$/,
  hex: /^#[a-f0-9]{3}([a-f0-9]{3})?$/i
};


module.exports = {
  is: function(string) {
    for (matcher in matchers) {
      if (matchers.hasOwnProperty(matcher)) {
        if (matchers[matcher].test(string)) {
          return matcher;
        }
      }
    }
  },
  isHSL: function(string) {
    return matchers.hsl.test(string);
  },
  isRGB: function(string) {
    return matchers.rgb.test(string);
  },
  isHEX: function(string) {
    return matchers.hex.test(string);
  }
};
},{}]},{},[1])
(1)
});