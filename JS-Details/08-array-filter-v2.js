const estoque = [
    {
        descricao: 'Camisa Polo',
        cor: 'Branca',
        preco: 579.90,
        perfil: 'Feminino',
        quantidade: 10,
        promocao: true
    },
    {
        descricao: 'Camisa Polo',
        cor: 'Azul',
        preco: 779.90,
        perfil: 'Masculino',
        quantidade: 55,
        promocao: false
    },
    {
        descricao: 'Camisa Polo',
        cor: 'Vermelha',
        preco: 679.90,
        perfil: 'Masculino',
        quantidade: 100,
        promocao: true
    },
    {
        descricao: 'Camisa Polo',
        cor: 'Rosa',
        preco: 679.90,
        perfil: 'Feminino',
        quantidade: 18,
        promocao: false
    },
];

// Retorna todas as camisetas do perfil feminino
// const camisetasFemininas = estoque.filter((camisa) => {
//     return camisa.perfil == "Feminino";
    
// });
// console.log(camisetasFemininas);

// Retorna todas as camisetas em promoção
let qtdPromocao = 0;
const camisetasPromocao = estoque.filter((camisa) => {
    if (camisa.promocao == true) {
        qtdPromocao += camisa.quantidade;
    }
    return camisa.promocao == true;
});
console.log(camisetasPromocao);
console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);