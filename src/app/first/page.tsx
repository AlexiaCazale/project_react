import Botao from "@/components/Botao";
import Pagina from "@/components/template/Pagina";

export default function Home() {
  return (
    <Pagina>
        <div className="flex gap-2">
          <Botao label="Salvar" /> {/* new Botao(); */}
          <Botao label="Cancelar" />
        </div>
    </Pagina>
  )
}
