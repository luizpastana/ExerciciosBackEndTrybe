const { expect } = require('chai');

const naturaisFn = require('../numerosNaturais');

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

  describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = naturaisFn(-10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = naturaisFn(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = naturaisFn(0);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = naturaisFn(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });

  describe('quando o parâmetro passado não é um número', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = naturaisFn('AAAA');
  
        expect(resposta).to.be.a('string');
      });
  
      it('é igual a "o parâmetro deve ser um número"', () => {
        const resposta = naturaisFn('AAAA');
  
        expect(resposta).to.be.equals('o parâmetro deve ser um número');
      });
    });
  });
});