const crypto = require('crypto-js')

class Block {

  constructor({index, previousHash, data}) {
    this.index = index
    this.previousHash = previousHash
    this.data = data
    this.timestamp = new Date().getTime()
    this.nounce = 0
    this.hash = '' //this.generateHash(this.index, this.previousHash, this.timestamp, this.data, this.nounce)
  }

  generateHash(index, previousHash, timestamp, data, nounce) {
    const hash = crypto.SHA256(index + previousHash + timestamp + JSON.stringify(data) + nounce).toString()
    return hash
  }

  mine(difficult) {

    const zeros = Array(difficult+1).join('0') //ex dif--5 = 00000
    while(this.hash.substring(0, difficult) !== zeros ){
      this.nounce++
      this.hash = this.generateHash(this.index, this.previousHash, this.timestamp, this.data, this.nounce)
    }

    console.log(`Block mined, nounce:  ${this.nounce}, hash: ${this.hash} `)
    return true

  }

}
module.exports = Block