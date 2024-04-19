
class Disciplina{
    nome;
    codigo;
    ch;

    constructor(nome, codigo, ch){
        this.nome = nome;
        this.codigo = codigo;
        this.ch = ch;
    }
    setNome(nome){ //setar o valor de um atributo
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setCodigo(codigo){ //setar o valor de um atributo
        this.codigo = codigo;
    }
    getCodigo(){
        return this.codigo;
    }
    setCh(ch){ //setar o valor de um atributo
        this.ch = ch;
    }
    getCh(){
        return this.ch;
    }

}

module.exports = Disciplina;