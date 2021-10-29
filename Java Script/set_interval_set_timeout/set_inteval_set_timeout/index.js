

// guardando o id dela 
let timeoutId = setTimeout(() => {
    console.log("Executando após 2 segundos")
}, 2000)

clearTimeout(timeoutId); // antes que passe os 2 segundos está cancelando a execução dela

let seconds = 0;
// armazena
let intervalId = setInterval(() => {
    seconds += 2
    console.log(`Executando após ${seconds} segundos`)
    //console.log(seconds)
    if(seconds >= 10) clearInterval(intervalId)
}, 2000)



