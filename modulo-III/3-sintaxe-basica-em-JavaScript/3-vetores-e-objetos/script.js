/* let array = ['string', 1, true];
console.log(array);

let array2 = ['string', 1, true, array];
console.log(array2);
console.log(array2[2]);

array.forEach(function(item, index){console.log(item, index)});

array.push('novo item');
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('caracter');
console.log(array);

array.push(5, 4, 3, 2, 1);
console.log(array);

console.log(array.indexOf(1));

array.splice(0, 3);
console.log(array);

let newArray = array.slice(0,3);
console.log(newArray); */



let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object
console.log(string, boolean, objectInterno);