const questoes = require('./questoesV2');
describe('Testes para função Maior Número', ()=>{
  test('Testar a função maior número', () => {
    expect(questoes.ehMaior(7,3,9)).toBe(9);
  });
  test('Testar se retornar o maior número com dois iguais', ()=>{
   expect(questoes.ehMaior(2,2,8)).toBe(8);
  })
});

describe('Testes para a função verificar Idade', ()=>{
  test('Criança', () => {
    expect(questoes.calcularIdade(2020)).toBe('Você é uma criança - 4');
  });


})

