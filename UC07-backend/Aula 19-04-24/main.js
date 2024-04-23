const Aluno = require('./Aluno')
const Disciplina = require('./Disciplina')

let d1 = new Disciplina('Matemática', '012', 360);
let d2 = new Disciplina('Física', '013', 360);
let d3 = new Disciplina('Informátoca', '014', 360);
let a1 = new Aluno('José Arruda', 20020, [d1]);
//Retornar todas as informações do aluno
console.table(a1);
//Retornar somento o nome do aluno
console.log(a1.getNome());
//Retornar somento o nome do aluno e o nome da diciplina deste aluno
//console.log(`${a1.getNome()} ${a1.getDisciplina().getNome()}`);
//Modifique o nome da disciplina
//d1.setNome('Física');
//console.table(d1);
//Modifique o nome do aluno a1
//a1.setNome('Mané');
//console.table(a1);
//Modifique a matricula do aluno a1
//a1.setMatricula(3434);
//Apresente os dados do aluno a1
//console.table(a1);
//Atribua uma nota ao aluno a1
//a1.getDisciplina().setNota(9.5)
// a
console.table(a1);
a1.setDisciplina(d3);
a1.setDisciplina(d2);
d1.setNota(10);
d1.setNota(3);
d1.setNota(0);
d1.setNota(5);
d2.setNota(9);
d2.setNota(5);
d2.setNota(5);
d2.setNota(5);
d3.setNota(9);
d3.setNota(7);
d3.setNota(8);
d3.setNota(9.6);

a1.getDisciplina();

a1.boletim();




