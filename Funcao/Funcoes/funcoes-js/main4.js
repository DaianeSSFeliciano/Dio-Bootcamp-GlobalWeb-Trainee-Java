const meuArray = [30,30, 40, 5, 223, 2040, 3034, 5];

function valoresUnicos (arr) {
    const mySet = new Set(arr);
// hash
    return [...mySet]; // se torna elementos do array
}

console.log(valoresUnicos(meuArray));