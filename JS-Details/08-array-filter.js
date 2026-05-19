// Utilizado para filtrar um elemente de um array. Retorna apenas o encontrado, veja:
const numeros = [5,10, 15, 50, 100, 10, 13, 67, 267, 6767, 1000, ];

const numeroFiltrado = numeros.filter((numero) => {
    return numero == 67; // retorna apenas os números maiores que 10
});

const nomes = [
    "Victoria",
    "Davi",
    "Paulo",
    "Gabriel",
    "Walyson",
    "Gustavinho",
];

const nomeFiltrado = nomes.filter((nome) => {
    return nome.length <= 5 || nome.length == 7; // retorna apenas os nomes com 5 caracteres ou menos
});

const pessoaLetraG = nomes.filter((nome) => {
    const primeiraLetra = nome.substring(0, 1);
    return primeiraLetra == "G" || primeiraLetra == "P"; 
});

console.log(numeroFiltrado); // mostra o número filtrado (10) no console
console.log(pessoaLetraG); // mostra as pessoas com a primeira letra "G" ou "P" no console