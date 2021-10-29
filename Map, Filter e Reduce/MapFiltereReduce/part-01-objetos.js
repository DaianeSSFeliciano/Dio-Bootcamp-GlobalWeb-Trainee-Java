/*OBJETOS SÃO ESTRUTURAS DE DADOS CAPAZES DE ARMAZENAR E ORGANIZAR OUTROS DADOS
    // DADOS SÃO ORGANIZADOS ATRAVÉS DE PROPRIEDADES
    // ASSOCIAÇÃO CHAVE-VALOR
    // CHAVE É O NOME DA PROPRIEDADE
    // VALOR É O VALOR QUE ESTA PROPRIEDADE VAI RECEBER
    // TAMBÉM PODEM ARMAZENAR INTERNAMENTE QUALQUER OUTRO TIPO 
*/

// objeto
let spaceship = {
    name: 'Fenix', // nome e o valor
    crewQuantity: 7,
    type: 'Batalha'
}

// objeto também pode ser criado vazio

let objetoVazio = {

}

console.log(objetoVazio)

// outra forma de declarar um objeto vazio, é parecido com Array:

let outroObjetoVazio = new Object ()

console.log(outroObjetoVazio)

console.log(spaceship)
console.log(spaceship.type)
console.log(spaceship['name'])

spaceship.isHitched = false // quando atribuimos valor à uma propiedade que não existe,
// ela passa a existir no objeto

console.log(spaceship) //  console log ja mostra nova propriedade

spaceship['shieldLevel'] = 100 // outra forma de atribuir valor, mesma coisa
// dependendo isso pode gerar alguma complicação, mas não tem diferença no momento

console.log(spaceship) // impresso com novas modificações

spaceship['name'] = 'Jon'

console.log(spaceship['name'])

spaceship.crewQuantity = true

console.log(spaceship['crewQuantity'])

spaceship['crewQuantity'] = 7

console.log(spaceship)