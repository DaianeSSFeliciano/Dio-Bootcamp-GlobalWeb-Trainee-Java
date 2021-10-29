function filtrarGatos (arr, index) {
   return arr.filter(gatos)
}

function gatos (item, index) {
    return  novosGatos [index]  == 'Preto' || novosGatos
     [index] == 'Preta' && idadeGatos [index]  == 2 
     || idadeGatos [index] == 4
}

const novosGatos = ['Rosa', 'Branco', 'Preto', 'Preta']
const idadeGatos = [4, 3, 2, 1]

console.log(filtrarGatos(idadeGatos))