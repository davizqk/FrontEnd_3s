function calcular() {
    // Pegar os valores dos campos
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    // exibir no console
    console.log(nome);
    console.log(altura);
    console.log(peso);

    // verificar se tem campo sem preencher
    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
                alert("Preencha todos os campos!")
                return false;
    }

    console.log("Liberado para cadastrar");
}