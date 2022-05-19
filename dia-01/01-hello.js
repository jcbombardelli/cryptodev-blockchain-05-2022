var nome = 'JC Bombardelli';
var idade = 29
var lista = ["maça", "banana", "pera"]
var isTrue = false
var objeto = { 
    nomecompleto: "JC Bombardelli",
    idade: 29,
    linguagens: ['java', "javascript", "rust"],
    outroobjeto: {
        endereco: "RUa do limoeiro, 80"
    }
 }

// console.log(nome);
// console.log(idade)
// console.log(lista)
// console.log(isTrue)
// console.log(objeto)


function hello() {
    console.log("Minha idade é de: " + idade);
}


function helloComIdade(idade) {
    console.log("Minha idade é de: " + idade);
}


helloComIdade(idade)