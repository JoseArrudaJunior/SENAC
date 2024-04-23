
class Aluno{
    nome;
    matricula;
    disciplina;

    constructor(nome, matricula, disciplina){
        this.nome = nome;
        this.matricula = matricula;
        this.disciplina = disciplina;
    }
    setNome(nome){ //setar o valor de um atributo
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setMatricula(matricula){ //setar o valor de um atributo
        this.matricula = matricula;
    }
    getMatricula(){
        return this.matricula;
    }
    setDisciplina(disciplina){
        this.disciplina.push(disciplina);
    }
    getDisciplina(){
        for(let i=0; i<this.disciplina.length;i++){
            console.table(this.disciplina[i]);
    }

}
    boletim(){
        for(let i=0; i<this.disciplina.length;i++){
            console.log(this.disciplina[i].situacaoDisciplina());

    }

    }
}


module.exports = Aluno;
