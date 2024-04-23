
class Disciplina{
    nome;
    codigo;
    ch;
    nota;

    constructor(nome, codigo, ch){
        this.nome = nome;
        this.codigo = codigo;
        this.ch = ch;
        this.nota = []
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
    setNota(nota){ //setar o valor de um atributo
    this.nota.push(nota);
    }
    getnota(){
    return this.nota;
    }
    situacaoDisciplina(){
        let media=0
        for(let i=0; i<this.nota.length;i++){
            media += this.nota[i]
        }
        media = media/this.nota.length;

        if(media>=6){
            return `(${this.nome}) Média: ${media} - Aprovado`;
        }else{
            return `(${this.nome}) Média: ${media} - Reprovado`;
        }

    }
}

module.exports = Disciplina;