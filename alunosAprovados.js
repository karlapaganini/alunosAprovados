const alunos = [
	{
		nome: 'Miguel',
		nota: 8,
		turma: '1B',
	},
	{
		nome: 'Beatriz',
		nota: 10,
		turma: '1B',
	},
	{
		nome: 'Felipe',
		nota: 9,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));