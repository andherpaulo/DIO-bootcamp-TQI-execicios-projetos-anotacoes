/* function alunosAprovado(arr, mediaFinal){
    let resultado = [];

    for(i in arr){
        alunoNota(arr[i], mediaFinal, resultado);
    }

    return resultado;
}

function alunoNota({nome: nome1, nota: n1}, mediaParaAprovar, resultadoFuncao){
    let aprovado = n1 >= mediaParaAprovar;
    if(aprovado){
        resultadoFuncao.push(nome1);
    }
}

const João = {
    nome: 'João',
    idade: 20,
    cidade: "Salvador",
    nota: 5,
}

const Maria = {
    nome: 'Maria',
    idade: 20,
    cidade: "Salvador",
    nota: 7,
}

const José = {
    nome: 'José',
    idade: 20,
    cidade: "Salvador",
    nota: 10,
}

let alunos = [João, Maria, José];

console.log(alunosAprovado(alunos, 5));
console.log(alunosAprovado(alunos, 6));
console.log(alunosAprovado(alunos, 8)); */



// SOLUÇÃO
function alunosAprovado(arr, mediaFinal){
    let resultado = [];

    for(i in arr){
        const {nome, nota} = arr[i];    // object destructuring ("PULO DO GATO")
        let aprovado = nota >= mediaFinal;
        if(aprovado) resultado.push(nome);
    }

    return resultado;
}

const alunos = [        // Declaração do array com os objetos dentro.
    {                   // Não precisa criar os objetos separados e 
        nome: 'João',   // depois criar o array!
        idade: 20,
        cidade: "Salvador",
        nota: 5,
    },
    {
        nome: 'Maria',
        idade: 20,
        cidade: "Salvador",
        nota: 7,
    },
    {
        nome: 'José',
        idade: 20,
        cidade: "Salvador",
        nota: 10,
    }
];

console.log(alunosAprovado(alunos, 5));
console.log(alunosAprovado(alunos, 6));
console.log(alunosAprovado(alunos, 8));