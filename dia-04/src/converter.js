
const rgbToHex = function(red, green, blue) {

  var redHex   = red.toString(16);
  var greenHex = green.toString(16);
  var blueHex  = blue.toString(16);

  return fill(redHex) + fill(greenHex) + fill(blueHex);

};

const hexToRgb = (hex) => {

  var red   = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue  = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];

};

function  fill(hex) {
  return (hex.length === 1 ? `0${hex}` : hex);
}


module.exports = {
  hexToRgb,
  rgbToHex
}

