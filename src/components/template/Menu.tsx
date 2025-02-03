import Link from "next/link"

export default function Menu(){
    
    return (
        <aside className="w-80 bg-zinc-800 p-6">
            <nav className="flex flex-col gap-2">
            <Link href="/">Início</Link>
            <Link href="/first">Primeiro componente</Link>
            <Link href="/contador">Componente de estado</Link>
            <Link href="/formulario">Exemplo de formulário</Link>
            </nav>
        </aside>
    )
}