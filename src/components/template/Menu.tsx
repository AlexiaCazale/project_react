import { Icon123, IconForms, IconHome2, IconNumber1, IconNumbers } from "@tabler/icons-react"
import MenuItem from "./MenuItem"

export default function Menu(){
    
    return (
        <aside className="w-80 bg-zinc-800 p-6">
            <nav className="flex flex-col gap-2">
                <MenuItem text="Início" href="/" icon={<IconHome2/>}/>
                <MenuItem text="Primeiro componente" href="/first" icon={<IconNumber1/>}/>
                <MenuItem text="Componente de estado" href="/contador" icon={<IconNumbers/>}/>
                <MenuItem text="Exemplo de formulário" href="/formulario" icon={<IconForms/>}/>
            </nav>
        </aside>
    )
}