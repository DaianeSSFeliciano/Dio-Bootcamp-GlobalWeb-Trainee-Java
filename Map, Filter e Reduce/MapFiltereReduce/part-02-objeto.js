// CONSEGUE DECLARAR E ATRIBUIR VALOR A QUALQUER COISA //
// PORÉ, BOAS PRÁTICAS SEGUE PADRÃO
let spacialStation =  {
    name: 'Fox', // É RECOMENDADO E PADRÃO UTILIZAR A DECLARAÇÃO, SEM SER STRING, NUMBER ETC
    2: 'Banana',
    true: false,
    "Jogada": "Bola", 
    funcao: function jogar (n2, n3) {
        return n2 + n3

    },
}

console.log(spacialStation.name)
console.log(spacialStation[2])
console.log(spacialStation[true])
console.log(spacialStation['Jogada'])

console.log(spacialStation.funcao(2,3))


// passa  a ficar vazio o objeto
spacialStation = {}

console.log(spacialStation)

