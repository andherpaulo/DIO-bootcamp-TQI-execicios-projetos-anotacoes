// VARIÁVEIS

//var y = 0;
var x = 1;
var z = 2;

/*var y = 0;
var x = 1; */
var z = 2;

// ctrl + /;
var y = 0;
var x = 1;
var z = 2;

// var preco = 2;
var desconto = 0.2;
const PRECO = 2;

PRECO = PRECO - desconto; // NÃO PODE!
var total = PRECO - desconto; //PODE!

// -----------------------------------

// FUNÇÕES

function soma (a, b) {
//    console.log(a + b); // Usado quando é necessário apenas apresentar o resultado
    return a + b; // Usado quando é necessário utilizar o resultado da função em outro lugar
}

soma(3, 5); //retorna 8