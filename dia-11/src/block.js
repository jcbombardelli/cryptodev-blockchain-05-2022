const crypto = require('crypto-js')

class Block {


  // index (height)
  // Previous Hash
  // Timestamp
  // Data
  // Hash


  //Declarados dentro do construtor
  //let index
  //let previousHash
  //let data

  constructor({index, previousHash, data}) {
    this.index = index
    this.previousHash = previousHash
    this.data = data
    this.timestamp = new Date().getTime()
    this.hash = this.generateHash(this.index, this.previousHash, this.timestamp, this.data)
  }

  generateHash(index, previousHash, timestamp, data) {

    const hash = crypto.SHA256(index + previousHash + timestamp + JSON.stringify(data)).toString()
    return hash
  }

}
module.exports = Block