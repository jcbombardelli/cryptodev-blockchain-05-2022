const { assert, expect } = require('chai')
// const assert = require('chai').assert

const matematica = require('../matematica')
//const { sum, sub, div, mul } = require('./matematica')


describe("Meu primeiro teste", () => {

  it("Soma igual a dois", () =>{
    assert.equal(1+1, 2)
  })

  it("Soma igual dois de um jeito diferente", () =>{
    expect(1+1).to.equals(2) 
  })
})


describe("Testes da minha lib de matematica", () => {

  it("Soma de numeros", () => {
      const valorEsperado = 10;
      const resultadoAtualDeSoma = matematica.sum(5,5)

      assert.equal(resultadoAtualDeSoma, valorEsperado)

  })


    it("Subtracao de numeros", () => {
      
      const primeiroTesteEsperado = 0
      const primeiroResultado = matematica.sub(10,10)

      const segundoTesteEsperado = 2
      const segundoResultado = matematica.sub(4,2)

      assert.equal(primeiroResultado, primeiroTesteEsperado)
      assert.equal(segundoResultado, segundoTesteEsperado)


  })
})