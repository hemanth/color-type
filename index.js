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