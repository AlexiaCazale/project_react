import Contador from "@/components/Contador";
import Pagina from "@/components/template/Pagina";

export default function PaginaContador(){
    return (
        <Pagina>
            <Contador valor={10000}/>
            <Contador/>
            <Contador/>
        </Pagina>
    )
    
}