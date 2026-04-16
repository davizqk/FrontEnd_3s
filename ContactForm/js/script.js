async function cadastrarContato(objetoContato) {

console.log(objetoContato);

const resposta = await fetch("http://localhost:3000/contatos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(objetoContato)//converte o objeto json
});

    return await resposta;
}

async function buscarEndereco(cep) {
if(cep.trim().length < 8){
    alert("O CEP deve ter 8 números");
    return false;
}

// buscar o CEP lá na ViaCEP
    try {
    aguardandoCampos();

    let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await retorno.json()

    //preenchendo os campos do formulário
    document.getElementById("rua").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("estado").value = dados.estado;
    } catch (error) {
    console.log(error); 
    }

}

    function aguardandoCampos() {
    document.getElementById("rua").value = "...";
    document.getElementById("bairro").value = "...";
    document.getElementById("cidade").value = "...";
    document.getElementById("estado").value = "...";
}


function validarFormulario() {
let nome = document.getElementById("nome").value;
let sobrenome = document.getElementById("sobrenome").value;
let email = document.getElementById("email").value;
let ddi = document.getElementById("ddi").value;
let ddd = document.getElementById("ddd").value;
let numero = document.getElementById("numero").value;
let cep = document.getElementById("cep").value;
let rua = document.getElementById("rua").value;
let numeroCasa = document.getElementById("numeroCasa").value;
let complemento = document.getElementById("complemento").value;
let bairro = document.getElementById("bairro").value;
let cidade = document.getElementById("cidade").value;
let estado = document.getElementById("estado").value;
let anotacoes = document.getElementById("anotacoes").value;

let quantidadeErros = 0;

if(nome.trim().length == 0){
    formError("nome");
    quantidadeErros++;
    alert("O campo nome é obrigatório!")
}else{
    reiniciaBorda("nome");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(sobrenome.trim().length == 0){
    formError("sobrenome");
    quantidadeErros++;
    alert("O campo sobrenome é obrigatório!")
}else{
    reiniciaBorda("sobrenome");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(email.trim().length == 0){
formError("email");
quantidadeErros++;
alert("O campo email é obrigatório!")
}else{
reiniciaBorda("email");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(ddi.trim().length == 0){
formError("ddi");
quantidadeErros++;
alert("O campo ddi é obrigatório!")
}else{
reiniciaBorda("ddi");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(ddd.trim().length == 0){
formError("ddd");
quantidadeErros++;
alert("O campo ddd é obrigatório!")
}else{
reiniciaBorda("ddd");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(numero.trim().length == 0){
formError("numero");
quantidadeErros++;
alert("O campo número de celular é obrigatório!")
}else{
reiniciaBorda("numero");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(cep.trim().length == 0){
formError("cep");
quantidadeErros++;
alert("O campo cep é obrigatório!")
}else{
reiniciaBorda("cep");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(rua.trim().length == 0){
formError("rua");
quantidadeErros++;
alert("O campo rua é obrigatório!")
}else{
reiniciaBorda("rua");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(numeroCasa.trim().length == 0){
formError("numeroCasa");
quantidadeErros++;
alert("O campo número da casa é obrigatório!")
}else{
reiniciaBorda("numeroCasa");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(complemento.trim().length == 0){
formError("complemento");
quantidadeErros++;
alert("O campo complemento é obrigatório!")
}else{
reiniciaBorda("complemento");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(bairro.trim().length == 0){
formError("bairro");
quantidadeErros++;
alert("O campo bairro é obrigatório!")
}else{
reiniciaBorda("bairro");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(cidade.trim().length == 0){
formError("cidade");
quantidadeErros++;
alert("O campo cidade é obrigatório!")
}else{
reiniciaBorda("cidade");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(estado.trim().length == 0){
formError("estado");
quantidadeErros++;
alert("O campo estado é obrigatório!")
}else{
reiniciaBorda("estado");
}
/////////////////////////////////////////////////////////////////////////////////////////////
if(anotacoes.trim().length == 0){
formError("anotacoes");
quantidadeErros++;
alert("O campo anotacoes é obrigatório!")
}else{
reiniciaBorda("anotacoes");
}


if (quantidadeErros > 0) {
    alert("preencha todos os campos!");
    quantidadeErros = 0;
} else {
    let objetoContato = {
    nome: nome,
    sobrenome : sobrenome,
    email : email,
    ddi : ddi,
    ddd : ddd,
    numero : numero,
    cep : cep,
    rua : rua, 
    numeroCasa : numeroCasa,
    complemento : complemento,
    bairro : bairro,
    cidade : cidade,
    estado : estado,
    anotacoes : anotacoes
    }

    let cadastrado = cadastrarContato(objetoContato);

    reiniciaTodasAsBordas();

    return false;
    }

}



function formError(idCampo){
document.getElementById(idCampo).style.border ="2px solid red"; 
}

function reiniciaBorda(idCampo){
document.getElementById(idCampo).style.border = "transparent";
}

function reiniciaTodasAsBordas(){
document.getElementById("nome").style.borderColor = "transparent";
document.getElementById("sobrenome").style.borderColor = "transparent";
}
