class Conta {
    titular;
    saldo;

    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;

    }

    depositar(valor) {
        if (valor > 0 && typeof valor == 'number') {//restrição valor maior que 0 e tipo de dado númerico
            this.saldo += valor
        } else {
            console.log('Valor invalido')
        }
    }

    
    sacar(valor) {
        if (valor > 0 && typeof valor == 'number' && valor <= this.saldo) {//restrição valor maior que 0 e tipo de dado númerico
            this.saldo -= valor
        } else {
            console.log('Saldo Insuficiente')
        }
    }


    getSaldo() {
        return this.saldo;
    }
}
module.exports = Conta;
