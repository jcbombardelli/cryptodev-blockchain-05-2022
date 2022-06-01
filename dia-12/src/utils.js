const crypto = require('crypto-js')


const hashGenerator = (...params) => {
  const flatParams = params.join().replaceAll(',' , '')
  return crypto.SHA256(flatParams).toString()
}

module.exports = {
  hashGenerator
}
