/* function comparaNumeros(n1, n2){
    // (n1 === n2) ? console.log(`Os números ${n1} e ${n2} são iguais.`) : console.log(`Os números ${n1} e ${n2} não são iguais. `);

    let soma = n1 + n2;

    (n1 === n2) ? (soma > 10) ? ((soma > 20) ? console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`) : console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`)) : console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`) : (soma > 10) ? ((soma > 20) ? console.log(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`) : console.log(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`)) : console.log(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);

    // (soma > 10) ? ((soma > 20) ? console.log(`Sua soma é ${soma}, que é maior que 10 e maior que 20`) : console.log(`Sua soma é ${soma}, que é maior que 10 e menor que 20`)) : console.log(`Sua soma é ${soma}, que é menor que 10 e menor que 20`);

} */

function comparaNumeros (n1, n2){
    const primeiraFrase = criaPrimeiraFrase(n1, n2);
    const segundaFrase = criaSegundaFrase(n1, n2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(n1, n2){
    let saoIguais = '';

    if (n1 !== n2) saoIguais = 'não ';

    return `Os números ${n1} e ${n2} ${saoIguais}são iguais.`
}

function criaSegundaFrase(n1, n2){
    const soma = n1 + n2;

    let resultado10 = 'menor'
    let resultado20 = 'menor'
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) resultado10 = 'maior';
    if(compara20) resultado20 = 'maior';

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(2, 2));
console.log(comparaNumeros(2, 12));
console.log(comparaNumeros(2, 22));