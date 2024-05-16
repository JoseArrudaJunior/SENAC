const Pessoa = require('./Pessoa');

let p1 = new Pessoa('Joel Santos',18, 'Masculino', 12345);

console.log(`Console 01:\n ${p1.getNome()} ${p1.getIdade()}`)
console.log(`Console 02:\n ${p1.exibirDados()}`)
console.table(p1)

