function substituiPares(array){
    if(!array) return 'Array inválido!';

    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(isNaN(array[i])) return 'O array não é composto apenas por números!';
    }

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log('Este número já é zero!')
        }else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

console.log(substituiPares(50));
console.log(substituiPares('Pudim'));
console.log(substituiPares([1, 3, 4, 6, 80, 33, 23, 90, 0]));
console.log(substituiPares([]));

console.log(substituiPares(null));
console.log(substituiPares(false));
console.log(substituiPares(undefined));