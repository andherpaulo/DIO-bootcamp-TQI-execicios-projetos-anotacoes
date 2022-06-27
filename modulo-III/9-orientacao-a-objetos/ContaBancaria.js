class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	get saldo() {
		return this._saldo;
	}

	set saldo(n) {
		this._saldo = n;
	}

	sacar(sac) {
		let saldoInsuf = sac > this._saldo;

		if (saldoInsuf){return 'Saldo Insuficiente';}
		
		this._saldo = this._saldo - sac;
		
		return this._saldo;
	}

	depositar(dep) {
		this._saldo = this._saldo + dep;

		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, saldo, cartaoCredito) {
		super(agencia, numero, saldo);      // função super manda quantos parâmtros desejar
		this.tipo = 'Conta Corrente';      	// define parâmetro obj. pai com "this"
		this._cartaoCredito = cartaoCredito;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}

	set cartaoCredito(n) {
		this._cartaoCredito = n;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'Conta Poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'Conta Universitária';
	}
	
	sacar(sac) {
		super.sacar(sac);
		if(sac < 500){
			this._saldo = this._saldo - sac;
		}else{
			return 'Digite um valor menor que 500 reais!';
		}
	}
}