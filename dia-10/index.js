const readline = require('readline-sync')

function main() {
  clear()
  let op
  
  do{
    console.log('Welcome to my CryptoDevChain !\n\n')
    op = readline.questionInt('1. Add a new block\n2. Print the chain\n0. Exit\n')
    clear()
    switch(op) {
      case 1:
        const amount = readline.questionInt('Amount: ')
        const message = readline.question('Message: ')
        console.log('Block added!')
        clear(true)
        break;
      case 2:
        console.log('Blocks List!')
        clear(true)
        break;
      case 0:
        console.info("Bye!")
        break;
      default:
        console.error("Invalid option")
        clear()
        break;
    }

  } while(op !== 0)
}

function clear(pressAnyKey) {
  if(pressAnyKey)
    readline.keyIn('Press any key to continue...')
  console.clear()
}

main()