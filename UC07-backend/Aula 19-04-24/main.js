const Aluno = require('./Aluno')
const Disciplina = require('./Disciplina')

let d1 = new Disciplina('Matemática', '012', 360);
let d2 = new Disciplina('Física', '013', 360);
let a1 = new Aluno('José Arruda', 20020, d1);
//Retornar todas as informações do aluno
console.table(a1);
//Retornar somento o nome do aluno
console.log(a1.getNome());
//Retornar somento o nome do aluno e o nome da diciplina deste aluno
console.log(`${a1.getNome()} ${a1.getDisciplina().getNome()}`);
//Modifique o nome da disciplina
d1.setNome('Física');
console.table(d1);
//Modifique o nome do aluno a1
a1.setNome('Mané');
console.table(a1);
//Modifique a matricula do aluno a1
a1.setMatricula(3434);
//Apresente os dados do aluno a1
console.table(a1);

