// var isValid = false

// if(isValid === true) {
//     console.log('Sucesso')
// } else {
//     console.log('Falha')
// }


var operador = 3

switch(operador) {
    case 1: 
        console.log('O Valor seleciodo foi 1')
        break
    case 2:
        console.log('O valor foi 2')
        break
    case 3:
        console.log('Nosso campeão é o 3')
        break
    default:
        console.log("valor default " + operador)
        break
}



var isValid = true;


function verify(isValid) {
    if(isValid) return true
    else return false
}

// console.log(verify(isValid))

// NAO FACAM ISSO MEU DEUS DO CEU
var resultado = verify(isValid) == true ? true : false
console.log(resultado)



// var isValid = true

// function verify(validator) {
//     if(validator) {
//         return true
//     }
//     return false
// }

// var resultado = !isValid ? true : false
// console.log(resultado)

var minhaVariavel //undefined

// if(minhaVariavel !== null || minhaVariavel !== undefined || minhaVariavel !== '') {
//     var minhaOutraVariavel = minhaVariavel
//     console.log(minhaOutraVariavel)
// }


var shortCircuit = minhaVariavel || 'valor qualquer'

console.log(shortCircuit)