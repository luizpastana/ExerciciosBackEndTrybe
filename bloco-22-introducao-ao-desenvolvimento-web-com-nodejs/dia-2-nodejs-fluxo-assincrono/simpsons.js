const fs = require('fs').promises;

function readAll() {
  fs.readFile('./Trybe_e_os_simpsons.json', 'utf-8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

    strings.forEach((string) => console.log(string));
  });
}


async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./Trybe_e_os_simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

     if (!chosenSimpson) {
       /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
        * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
        * tendo como motivo o que passarmos para o `throw`.
        * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
        */
       throw new Error('id não encontrado');
     }
     return chosenSimpson;
}

// async function readAllComAsyncAwait() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

//   strings.forEach((string) => console.log(string));
// }

async function main() {
  const simpson = await getSimpsonById(3);
  console.log(simpson);
}

main();
