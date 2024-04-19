
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
    setDisciplina(disciplina){ //setar o valor de um atributo
        this.disciplina = disciplina;
    }
    getDisciplina(){
        return this.disciplina;
    }

}

module.exports = Aluno;
