const Block = require('./block')


class Chain {


  constructor() {
    this.instance = [new Block({index: 0, previousHash: 0, data: 'Genesis Block'})]
    this.index = 1
  }

  addBlock(data) {
    const index = this.index
    const previousHash = this.instance[this.index - 1].hash

    const block = new Block({index, previousHash, data})

    this.index++
    this.instance.push(block)
  }

  print() {
    console.log(this.instance)
  }

}

module.exports = Chain