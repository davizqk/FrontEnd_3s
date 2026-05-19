const numeros = [
    50,
    67.67, 
    200,
    300,
    500,
    953,
    6767.67
];
console.log(`Array original: ${numeros}`);
console.log();

// Rodar o map gerando um novo array com o dobro dos números do original

const dobro = numeros.map((numero) => {
    return numero * 2;
});

// após, exiba os valores do array dobro no console utilizando o forEach
let textoResultado = ``;
console.log(`Array dobro:`);
dobro.forEach((numero) => {
    textoResultado += `${numero} | `; // acumula texto em uma string (sem pular linha)
});


textoResultado = textoResultado.substring(0, textoResultado.length -3); // remove os últimos 3 caracteres (o " | ")
console.log(textoResultado); // mostra o texto completo 


