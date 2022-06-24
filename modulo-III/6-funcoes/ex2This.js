function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: 'João',
    idade: 20,
    cidade: "Salvador",
    nota: 5,
};

console.log(calculaIdade.call(pessoa, 5));
console.log(calculaIdade.apply(pessoa, [5]));

let joao = calculaIdade.bind(pessoa, 5);
console.log(joao());