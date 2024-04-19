const Conta = require('./Conta')

let c1 = new Conta('Jose Arruda', 100);
c1.depositar(1000)
console.log(c1.getSaldo());

c1.sacar(150)
console.table(c1);
console.log(c1.getSaldo());
console.table(c1);
console.log(c1.getSaldo());
//c1.sacar(-5);
c1.depositar(0);


console.table(c1)
