// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = "andher";
console.log(typeof(nome));

// function
var funcao = function() {};
console.log(typeof(funcao));

// como declarar
var variavel = "andher";
variavel = "paulo";
console.log(variavel);

let variavel2 = "andher"
variavel2 = "paulo";
console.log(variavel2);

/* const CONSTANTE = "andher";
CONSTANTE = "paulo";
console.log(CONSTANTE); */

// escopos
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuicao = 'andher';
console.log(atribuicao);

// comparação
var comparação = 0 == '0';
console.log(comparação);

var comparaçãoIdentica = 0 === '0';
console.log(comparaçãoIdentica);

// operadores aritméticos
var adicao = 1 + 1;
console.log(adicao);

var subtracao = 2 - 1;
console.log(subtracao);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

var divisaoReal = 6 / 2;
console.log(divisaoReal);

var resto = 5 % 2;
console.log(resto);

var potenciacao = 2 ** 10;
console.log(potenciacao);