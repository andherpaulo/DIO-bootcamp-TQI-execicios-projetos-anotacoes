/* function palindromo(string) {
    if(!string) return "String inexistente!";
    
    var ehPalindromo = true;
    
    for(let i = 0; i < string.length; i++){
        if(string[i] !== string[string.length-1-i]){
            ehPalindromo = false;
        }
    }
    
    return ehPalindromo ? 'É palíndromo!' : 'Não é palíndromo!';
} */



// SOLUÇÃO 1
/* function palindromo(string) {
    if(!string) return "String inexistente!";

    return string.split("").reverse().join("") === string;
} */



// SOLUÇÃO 2
function palindromo(string) {
    if(!string) return "String inexistente!";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) return false;
    }

    return true;
}



console.log(palindromo('ovo'));
console.log(palindromo('banana'));

console.log(palindromo(''));

let myVar1;
let myVar2 = null;
let myVar3 = false;

console.log(palindromo(myVar1));
console.log(palindromo(myVar2));
console.log(palindromo(myVar3));