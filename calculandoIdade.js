function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Lilian',
	idade: 23,
};

const pessoa2 = {
	nome: 'Marcos',
	idade: 20,
};

const pessoa3 = {
	nome: 'Michele',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));