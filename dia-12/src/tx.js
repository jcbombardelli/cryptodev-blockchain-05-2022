class Transaction {

  constructor({sender, receiver, amount, message = ''}) {
    this.sender = sender
    this.receiver = receiver
    this.amount = amount,
    this.timestamp = new Date().getTime()
    this.message = message
  }

}


module.exports = Transaction