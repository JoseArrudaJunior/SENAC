class Pessoa{
    constructor(nome, idade, sexo, cpf){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf = cpf;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    exibirDados(){
        return `Nome:${this.nome}\n Idade:${this.idade}\n Sexo:${this.sexo}\n CPF:${this.cpf}`
    }
}
module.exports = Pessoa;


