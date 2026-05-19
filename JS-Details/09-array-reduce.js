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

// Reduz o array a um único elemento. No caso um somatório, por exemplo:
let totalValorEstoque = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    totalValorEstoque += produto.preco * produto.quantidade;
    return total + produto.quantidade;
}, 0);

console.log(`Total em estoque: ${totalEstoque}`); 
console.log(`Valor total do estoque: R$ ${totalValorEstoque.toFixed(2)}`);


// let totalValorEstoque = estoque.reduce((total, produto) => {
//     return total + (produto.preco * produto.quantidade);
// }, 0);

// console.log(`Valor total do estoque: R$ ${totalValorEstoque.toFixed(2)}`);  