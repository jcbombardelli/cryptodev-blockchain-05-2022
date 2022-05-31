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
    const mined = block.mine(1)

    if(mined){
      this.index++
      this.instance.push(block)
    }

  }

  print() {
    console.log(this.instance)
  }

  isValid() {

    for(let i = 1; i < this.instance.length; i++){

      const currentBlock = this.instance[i] // Bloco 1
      const previousBlock = this.instance[i - 1] // Bloco 0

      const reGeneratedHash = currentBlock.generateHash(
        currentBlock.index, 
        currentBlock.previousBlock, 
        currentBlock.timestamp,
        currentBlock.data,
        currentBlock.nounce
      )

      // Compara se Hash não coincidem 
      if(currentBlock.hash !== reGeneratedHash){
        return false
      }

      if(currentBlock.previousHash !== previousBlock.hash){
        return false
      }

      if(currentBlock.index !== previousBlock.index +1){
        return false
      }
    }
    return true

  }

}

module.exports = Chain