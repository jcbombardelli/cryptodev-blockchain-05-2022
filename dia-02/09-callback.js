const filesystem = require('fs')
//import filesystem from 'fs'

const pessoa = {
  nome: 'JC',
  sobrenome: 'Bombardelli',
  idade: 28,
  profissao: 'Reporter'
}

function resultWriteFile(err) {
  if(!err)
    console.log("Arquivo salvo com sucesso")
  else
    console.log(err)
}

filesystem.writeFile('./pessoa.json', JSON.stringify(pessoa), resultWriteFile)

filesystem.readFile('./pessoa.json', (err, data) => {
  console.log(err)
  console.log(data)
})
