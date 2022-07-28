const { expect } = require('chai');

const naturaisFn = require('./numerosNaturais');

describe('Executa a função numerosNaturais', () => {
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = naturaisFn(10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = naturaisFn(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });
});