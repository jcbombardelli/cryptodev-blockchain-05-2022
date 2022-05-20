
const pessoa = {
  nome: 'JC',
  sobrenome: 'Bombardelli',
  idade: 28,
  profissao: 'Reporter',
  endereco: {
    rua: 'Limoeiro',
    numero: 80,
    cidade: 'Santos',
    Estado: 'SP'
  }
};

const pessoa2 = {
  sobrenome: 'Moraes',
  profissao: 'Reporter',
  nome: 'Caio',
  endereco: {
    rua: 'Limoeiro',
    numero: 80,
    cidade: 'Santos',
    Estado: 'SP'
  },
  idade: 33,
};

const arrKeys = Object.keys(pessoa)

//console.log(arrKeys)

for (const key in arrKeys) {
  const elementJC = pessoa[key]
  const elementCaio = pessoa2[key]
  console.log(elementJC, elementCaio) 
}