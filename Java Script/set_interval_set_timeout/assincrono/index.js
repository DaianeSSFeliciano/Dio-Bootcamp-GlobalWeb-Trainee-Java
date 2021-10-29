// EXECUÇÃO ASSINCRONA - FUNCIONAMENTO

function step02() {
    console.log("Passo 2")
}
console.log("Passo 1")
step02()
console.log("Passo 3")

console.log("Passo 4")

setTimeout(() => {
    console.log("Passo 5")
}, 1000) // quando chamou ele não aguardou o fim da instrução para poder ir para o passo 6 / executa a funcao depois de um segundo, mas ele não aguarda a conclusão

console.log("Passo 6") // passou para o passo 6


// PROMISSE DA SUP
