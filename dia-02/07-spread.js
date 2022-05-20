// let lista = [1, 2, 5]
// let listaIncluir = [3, 4]

// let arrResult = []

// for (let index = 0; index < lista.length; index ++) {
//   const element = lista[index]
//   arrResult.push(element)
// }


// for (let index = 0; index < listaIncluir.length; index ++) {
//   const element = listaIncluir[index]
//   arrResult.push(element)
// }

// console.log(arrResult)
//let result = [...lista, ...listaIncluir]

// console.log(result)

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

const { nome, ...endereco} = pessoa
console.log(endereco)

