import { useState } from "react";

function CadFruta() {
    //states, variáveis e funções

    //state do formulario
    const[fruta, setFruta] = useState("") // cria um state string vazia
    const[quantidade, setQuantidade] = useState("")
    const[arrFrutas, setArrFrutas] = useState([
        {id: 1, nome: "Abacaxi", quantidade: 10},
        {id: 2, nome: "Morango", quantidade: 20}
    ]) // cria um state array vazio

    function Cadastrar(e) {
        e.preventDefault();
        setArrFrutas([...arrFrutas, {id: Date.now(), nome: fruta, quantidade: quantidade}])

        limparFormulario() //após cadastrar, limpar os campos do formulario

        return false;
    }

    function limparFormulario() {
        setFruta("")
        setQuantidade(0)
    }

    return (
        <>
        <section className="sessao-cadastro">
            <h1>Cadastro</h1>
        <form action="" method="post" onSubmit={Cadastrar}>
        <fieldset className="linha">
            <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta</label>
            <label htmlFor="quantidade" className="cadastro__rotulo">Digite a quantidade de frutas</label>
            <input 
                type="text" 
                id="fruta" 
                className="cadastro__entrada"
                onChange={(e) => {
                    setFruta(e.target.value)
                }} 
            />
            <input 
                type="text" 
                id="quantidade" 
                className="cadastro__entrada"
                onChange={(e) => {
                    setQuantidade(e.target.value)
                }} 
            />
            <button className="cadastro__btn-cadastrar" onClick={() => { // esta função só roda após o click do botão
                return 
            }}>Cadastrar</button>
            <br />
            <label htmlFor="">{fruta}</label>
        </fieldset>
        </form>

        <ul className="listagem">
            {
                arrFrutas.map( (f) => {
                    return <li key={f.id}>Fruta: {f.nome} | Quantidade: {f.quantidade}</li>
                })
            }
        </ul>
        </section>
        </>
    );
}

export default CadFruta
