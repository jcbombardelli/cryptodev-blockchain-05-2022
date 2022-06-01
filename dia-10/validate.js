// Block {
//   index: 1,
//   previousHash: '22036e1b50b82e77041544aac0fe4488b1e27f008b0b6ddc8c4a19fa73d51d45',
//   data: { amount: 9001 },
//   timestamp: 1653751770381,
//   hash: 'da86d2797279605d5d5f1f408e3b2d99c7d281479ce3e567b644a546a203c8a3'
// },

const Block = require('./src/block')

const index = 1
const previousHash = '22036e1b50b82e77041544aac0fe4488b1e27f008b0b6ddc8c4a19fa73d51d45'
const data = { amount: 9001 }
const timestamp = 1653751770381
const hash = '579e6e623c3e1d099c2b8c93c929b6c14432fa9daa87e4a699b11571d3071278'

const processoValidacao = new Block({})

const hashResult = processoValidacao.generateHash(index, previousHash, timestamp, data)

console.log("HASH DO JC -> " + hash)
console.log("HASH GERADO -> " + hashResult)

if (hash === hashResult) {
  console.log('BLOCO VALIDO #confia')
}
else {
  console.log('BLOCO INVALIDO, VOLTA PRA CASA')
}

