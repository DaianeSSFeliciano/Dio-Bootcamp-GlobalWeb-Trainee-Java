const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro' ]
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((aluno, indice) => notas
[indice] < 5)
console.log(`reprovados: ${reprovados}`)

/*******************************************************/

function filtraPares(arr, index) {
    return arr.filter(callback)
}

function callback(item, index) {
    return notas [index] < 5
}

console.log(filtraPares(nomes))

/***************************************************** */


function filtraPares(arr, index) {
    return arr.filter(callback)
}

function callback(item, index) {
    return notas [index] < 5
}

console.log(`Alunos reprovados ${filtraPares(nomes)}`)


/************************************************************/


function filtraPares(arr, index) {
    return arr.filter(callback)
}

function callback(item, index) {
    return notas [index] < 5
}

console.log(`Alunos reprovados ${filtraPares(nomes)}`)

/*************************************************************/

function filtraGatos(arr, index) {
    return arr.filter(gatitos)
}

function gatitos (item, index) {
    return gatos [index]  == 'pink'
}

const gatos =  ['pink', 'azul', 'preto']
const gatosIndex =  [2, 3, 4]

console.log(filtraGatos(gatos))
