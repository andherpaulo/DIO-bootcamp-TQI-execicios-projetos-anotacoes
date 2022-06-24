// PRIMEIRA TENTATIVA

/* function retornaArray(arr, n){
    if(!arr || !n) throw "ReferenceError";
    if((!(arr instanceof Object)) || (!n instanceof Number)) throw "TypeError";
    if(arr.length !== n) throw "RangeError";

    return arr;
}

function testeErro(arr, n){
    try {
        retornaArray(arr, n);
    }
    catch(e) {
        throw e;
    }
}

console.log(testeErro([1, 2, 3], 3));
console.log(testeErro([1, 2, 3], 30));
console.log(testeErro([1, 2, 3], [1, 2, 3]));
console.log(testeErro(30, 30));
console.log(testeErro()); */



// SOLUÇÃO

function retornaArray(arr, n){                                                                          // Atentar para a forma de "throw new TypeError"
    try{                                                                                                // Lançar o "try" dentro da própria função
        if(!arr || !n) throw new ReferenceError("Envie todos os parâmetros!");
        if(typeof arr !== 'object') throw new TypeError("O primeiro parâmetro deve ser um array!");     // Conferir o tipo com "typeoff"
        if(typeof n !== 'number') throw new TypeError("O segundo parâmetro deve ser um número!");       // Conferir o tipo com "typeoff"
        if(arr.length !== n) throw new RangeError("O tamanho do array é diferente do número enviado como parâmetro!");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        }else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(retornaArray([1, 2, 3], 3));
// console.log(retornaArray([1, 2, 3], 30));
// console.log(retornaArray([1, 2, 3], [1, 2, 3]));
// console.log(retornaArray(30, 30));
// console.log(retornaArray());