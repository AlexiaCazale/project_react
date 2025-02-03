import Botao from "@/components/Botao";
import Pagina from "@/components/template/Pagina";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-2">
      {/* <Link href="/first">Primeiro Componente</Link>
      <Link href="/contador">Contador</Link> */}
      <Pagina>
        <h1>Seja Bem-Vindo(a)!</h1>
      </Pagina>
    </div>
  )
}
