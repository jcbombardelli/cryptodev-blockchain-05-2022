var expect = require('chai').expect;
const { assert } = require('chai');
var converter = require('../src/converter');

describe('Color Code Converter', function () {
  it('converts the basic colors RGB To HEX', function () {
    var redHex = converter.rgbToHex(255, 0, 0);
    var greenHex = converter.rgbToHex(0, 255, 0);
    var blueHex = converter.rgbToHex(0, 0, 255);

    assert.deepEqual(redHex, 'ff0000')
    assert.deepEqual(greenHex, '00ff00')
    assert.deepEqual(blueHex, '0000ff')

  });

  it('converts the basic colors HEX To RGB', function () {
    var red = converter.hexToRgb('ff0000');
    var green = converter.hexToRgb('00ff00');
    var blue = converter.hexToRgb('0000ff');

    expect(red).to.deep.equal([255, 0, 0]);
    expect(green).to.deep.equal([0, 255, 0]);
    expect(blue).to.deep.equal([0, 0, 255]);
  });
});


//Faltam outros testes aqui ...aposto uma bala juquinha de coco que tu consegue sugerir algo melhor