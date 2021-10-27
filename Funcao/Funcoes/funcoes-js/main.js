const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18'

    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '18'

    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '20'

    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '20'

    },
]

function alunosAprovados(arr, media) {
    let = aprovados = [];

    const {nota, nome} = arr[i];

    for (let i = 0; i < arr.length; i++) {
        if(nota >= media) {
            aprovados.push(nome);
        }
        return aprovados; 
    }
}

console.log(alunosAprovados(alunos, 5));