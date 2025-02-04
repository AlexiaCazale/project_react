'use client';

import useFormularioUser from "@/hooks/useFormularioUser";

export default function Formulario(){

    const { nome, setNome, email, setEmail, senha, setSenha, salvar } = useFormularioUser();

    return (
        <div>
        <div className="flex flex-col gap-3">

            <input type="text" size={80} placeholder="Informe o nome: " value={nome} onChange={(e) => setNome(e.target.value)} className="bg-zinc-800 rounded-md p-2 outline-none"/>

            <input type="email" size={80} placeholder="Informe o E-mail: " value={email} onChange={(e) => setEmail(e.target.value)}  className="bg-zinc-800 rounded-md p-2 outline-none"/>

            <input type="password" size={80} placeholder="Informe a senha: " value={senha} onChange={(e) => setSenha(e.target.value)}  className="bg-zinc-800 rounded-md p-2 outline-none"/>

        </div>

        <button onClick={salvar} className="bg-green-500 p-2 rounded-md">Salvar</button>

        <div className="flex gap-5">
            <span>{nome}</span>
            <span>{email}</span>
            <span>{senha}</span>
        </div>

        </div>
    )
}