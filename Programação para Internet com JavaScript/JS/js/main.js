function botao () {
    document.getElementById('agradecimento').innerHTML = '<b> Obrigada por clicar</b>'
    //console.log(document.getElementById('agradecimento'))
    //alert('Obrigada por clicar')
}

function redire () {
    window.open('https://web.digitalinnovation.one/'); // outra janela
    window.location.href = 'https://web.digitalinnovation.one/'; // abre na msm janela
}

function trocar (elemento) {

    elemento.innerHTML = 'novo texto'
    //document.getElementById('mousemove').innerHTML = '<b> Novo Texto</b>'
    //alert('Trocar texto')
}

function voltar (elemento) {
    elemento.innerHTML = 'passe o mouse'
   // document.getElementById('mousemove').innerHTML = '<b> passe o mouse </b>'

}

function load() {
    alert('pag carregada')
}

// coleta valor que ta pegando
function funcaoChange (elemento) {
    console.log(elemento.value)
}

/*function validaIdade(idade) {
    var validar;
    if(idade >=18) {
        validar = true;

    } else {
        validar = false;
    }
    return validar;
   
}
*/
/*var idade = prompt('Qual a sua idade?');
console.log(validaIdade(idade))*/

/*function soma (n1,n2) {
    return n1 + n2;
}

function setReplace (frase, nome, novoNome) {
   return frase.replace(nome, novoNome)
}

console.log(setReplace('Vai Japão', 'Japão', 'Brasil'));

console.log(soma(5,10));*/

/*var d = new Date(); // data atual
alert(d);
alert(d.getMonth() + 1) // coloca +1 mes
alert(d.getMinutes());
alert(d.getDay());

*/
/*var count;

for(count = 0; count <= 5; count++) {

    console.log(count);
}

*/
/*
var count = 0;

while(count <= 5) {
    console.log(count);
    alert(count);
    count++;
}
*/


/*
var idade = prompt('Qual sua idade?')

if(idade >= 18) {
    alert('Maior de idade');
} else {
    alert('Menor de idade')
}*/



//lista de dicionarios
/*
var frutas = [{nome: 'maçã', 
             cor: 'vermelha'}, {nome: 'uva', 
             cor: 'verde'}, {nome: 'laranja', 
             cor: 'laranja'}]


console.log(frutas[1].nome);

*/


// dicionario
/*
var frutas = {nome: 'maçã', 
             cor: 'vermelha'}

console.log(frutas);
console.log(frutas.cor);
console.log(frutas.nome);*/


/*var lista = ['maçã', 'pêra','laranja'];
console.log(lista);
console.log(lista[1]);
alert(lista[1]);
lista.push('Uva'); // coloca elemento
console.log(lista);
lista.pop(); // tira ultimo elemento da lista
console.log(lista);
console.log(lista.length); // ver tamanho da lista
console.log(lista.reverse()); // traz os elementos ao contrário
console.log(lista);
console.log(lista.toString()); // string
console.log(lista.toString()[0]) // imprime a letra string
console.log(lista);
console.log(lista.join(" | ")); // coloca no meio*/







/*var nome = 'Daiane';
var n1 = 21;
var n2 = 10;
var frase = "Japão é o melhor time do mundo"
/*alert('Olá, Mundo <3 ' + nome + ' Numero ' + n1);
alert(n1+n2);

console.log(n1+n2);
console.log(frase)
console.log(frase.replace('Japão', 'Brasil')) // trocar
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());*/