// function numerosNaturais(num) {
//   switch (num) {
//     case num > 0:
//       return 'positivo';
//     case num < 0:
//       return 'negativo';
//     default:
//       return 'neutro';
//   }
// }

// module.exports = {
//   numerosNaturais
// }

module.exports = (numero) => {

  if (typeof numero !== 'number') {
    return 'o parâmetro deve ser um número';
  }

  if (numero > 0) {
    return 'positivo';
  }

  if (numero < 0) {
    return 'negativo';
  }

  return 'neutro';
};