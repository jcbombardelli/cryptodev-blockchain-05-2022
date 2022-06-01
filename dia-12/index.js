const readline = require('readline-sync')
const Chain = require('./src/chain')
const Transaction = require('./src/tx')


//Simulação do uso do Menu
const chain = new Chain()

function main() {
  clear()
  let op
  const txPool = []
  
  do{
    console.log('Welcome to my CryptoDevChain !\n\n')
    op = readline.questionInt(`1. Add a new block\n2. Print the chain\n3. Validate Blockchain\n4. Add a new Transaction\n5. List Transactions Pool\n0. Exit\n`)
    clear()
    switch(op) {
      case 1:
        chain.addBlock(txPool) //Cria um novo bloco e adiciona na cadeia
        console.log('Block added!')
        txPool.clear()
        clear(true)
        break;
      case 2:
        console.log('Blocks List!')
        chain.print() //Lista cadeia de blocos a partir da instancia
        clear(true)
        break;
      case 3: 
        const audit = chain.isValid();
        console.log(`Blockchain is ${audit ? 'Integral' : 'Violated'} !!!`)
        clear(true)
        break;
      case 4: 
        const sender = readline.question('Sender: ')
        const receiver = readline.question('Receiver: ')
        const amount = readline.questionInt('Amount: ')
        const message = readline.question('Message (optional): ')

        const tx = new Transaction({sender, receiver, amount, message})
        txPool.push(tx)
        console.log('Transaction added to TX Pool')
        clear(true)

        break;

      case 5: 
        console.log(`Transction's Pool: ${txPool.length} Transactions `)
        console.log(txPool)
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