const fs = require('fs').promises;

function readAll() {
  fs.readFile('./Trybe_e_os_simpsons.json', 'utf-8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

    strings.forEach((string) => console.log(string));
  });
}

// async function readAllComAsyncAwait() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

//   strings.forEach((string) => console.log(string));
// }

function main() {
  readAll();
}

main();
