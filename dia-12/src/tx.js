const { hashGenerator } = require('./utils')

class Transaction {

  constructor({sender, receiver, amount, message = ''}) {
    this.sender = sender
    this.receiver = receiver
    this.amount = amount,
    this.timestamp = new Date().getTime()
    this.message = message
    this.hash = hashGenerator(sender, receiver, amount, this.timestamp, JSON.stringify(message))
  }

}


module.exports = Transaction