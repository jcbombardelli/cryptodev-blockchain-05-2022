const pessoa = {
  nome: 'JC',
  sobrenome: 'Bombardelli',
  idade: 28,
  profissao: 'Reporter'
};

const novaPessoa = {
  sobrenome: 'Matoso',
  telefone: '13999999999',
  endereco: 'rua do limoeiro, 55'
}


const exibeInfos = (nome, idade, profissao) => {
  console.log(nome)
  console.log(idade)
  console.log(profissao)
}


const exibeInfosDenovo = ({nome, idade, profissao}) => {
  console.log(nome)
  console.log(idade)
  console.log(profissao)
}


let { profissao, nome, idade }  = pessoa

exibeInfos(nome, idade, profissao)
exibeInfosDenovo(pessoa)