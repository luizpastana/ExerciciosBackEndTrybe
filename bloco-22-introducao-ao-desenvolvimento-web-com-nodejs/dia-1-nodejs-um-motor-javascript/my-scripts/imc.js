const PESO_PADRAO_EM_KG = 80;
const ALTURA_PADRAO_EM_CM = 178;

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}

// A função main é o ponto de partida do nosso programa 
function main() {
  const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();