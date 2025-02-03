'use client';

import { useState } from "react";

interface ContadorProps{
    valor?: number // Sem ? é preciso colocar o valor OBRIGATORIAMENTO no page /contador
}

export default function Contador(props: ContadorProps) {

    const [num, setNumero] = useState(props.valor ?? 0);

    // const num = estado[0];
    // const setNumero = estado[1];

    function decrementar(){
        setNumero(num - 1);
        console.log(num);
    }

    function incrementar(){
        setNumero(num + 1);
        console.log(num);
    }

    return (
        <div>
            <h1>Contador</h1>
            <span>{num}</span>
            <div className="flex gap-2">
                <button className="bg-red-500 p-2" onClick={decrementar}>Decrementar</button>
                <button className="bg-green-600 p-2" onClick={incrementar}>Incrementar</button>
            </div>
        </div>
    )
}