function imprimeTexto(texto) {
    console.log(texto)
}

imprimeTexto('oi')

function soma() {
    return 2 + 3;
}

console.log()

imprimeTexto(soma())


function somaF (n1, n2) {
    return n1 + n2;
}

function multiplicacao (n1 ,n2) {
    return n1 * n2;
}

console.log(multiplicacao( somaF(2, 3), soma(2, 2))) 


