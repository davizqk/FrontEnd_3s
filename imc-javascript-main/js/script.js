async function calcular() {
    // Pegar os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    // verificar se tem campo sem preencher
    if (nome.length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Preencha todos os campos!")
        return false;
    }

    console.log("Liberado para cadastrar");

    // calcular IMC
    const IMC = calcularIMC(peso, altura);
    console.log(IMC);

    // gerar o texto da situação
    const Situacao = geraSituacao(IMC);
    console.log(Situacao);

    // gerar um objeto JS com os dados
    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        IMC: IMC,
        Situacao: Situacao
    }
    // cadastrar API
    const dadosGravados = await cadastrarNaAPI(objIMC);
    console.log(dadosGravados);

    if ("error" in dadosGravados) {
        alert(dadosGravados.error)
    } else {
        // mostrar no html (inserir a linha da tabela)
        // mostrarNaTela(objIMC);
        carregarCadastros();
    }
}

async function carregarCadastros() {
    // Fazer o fetch
    try {
        const retorno = await fetch("http://localhost:3000/imc");

        const dados = await retorno.json(); // convertendo a resposta para json

        dados.sort((a, b) => a.nome.localeCompare(b.nome));

        document.getElementById("cadastro").innerHTML = ""; // limpa a tabela antes de carregar 

        // percorre os dados para cada item 
        dados.forEach(item => {
            mostrarNaTela(item);
        });
    } catch (error) {
        console.log(error);
        alert("Erro ao carregar os dados");       
    }
    // Carregar os dados no html
    // alert("Carregando os dados...");
}

async function cadastrarNaAPI(objCadastro) {
    try {
        const retorno = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                'Content-Type': 'application/json; charse=UTF-8'
            }
        });

        const dadosGravados = await retorno.json();
        return await dadosGravados;

    } catch (error) {
        console.log(error);
        return await {error: "problemas para gravar na API"};
    }
}

    function mostrarNaTela(objCadastro) {
        document.getElementById("cadastro").innerHTML += `<tr>
                                                        <td>${objCadastro.nome}</td>
                                                        <td>${objCadastro.altura}</td>
                                                        <td>${objCadastro.peso}</td>
                                                        <td>${objCadastro.IMC.toFixed(2)}</td>
                                                        <td>${objCadastro.Situacao}</td>
                                                      </tr>`
    }

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function geraSituacao(IMC) {
        if (IMC < 16) {
            return "Magreza grave";
        } else if (IMC < 17) {
            return "Magreza moderada";
        } else if (IMC < 18.5) {
            return "Magreza leve";
        } else if (IMC < 25) {
            return "Saudável";
        } else if (IMC < 30) {
            return "Sobrepeso";
        } else if (IMC < 35) {
            return "Obesidade Grau I";
        } else if (IMC < 40) {
            return "Obesidade Grau II";
        } else {
            return "Obesidade Grau III";
        }
    }