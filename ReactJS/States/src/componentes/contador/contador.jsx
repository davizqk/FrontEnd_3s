import { useState } from "react";
import "./contador.css";

const Contador = () => {

    const[valor, setValor] = useState(0);

    function incremento() {
        if (valor < 10) {
            setValor(valor + 1);
        } else {
        setValor(0);
        }
    }

    // criar um função decremento()
    // toda vez que o contador chegar em 10 voce deve reiniciar
    // o contador não pode fazer contagem negativa
    function decremento() {
        if (valor > 0) {
            setValor(valor - 1);
        } else {
        setValor(0);
        }
    }
 
    return(
        <>
        <p>Contagem: {valor}</p>
        <button onClick={() => {return incremento()}}>++</button>
        <button onClick={(decremento)}>--</button>

        </>
    )
}

export default Contador;
 