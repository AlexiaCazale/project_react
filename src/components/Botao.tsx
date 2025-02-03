//Componente Funcional (baseado em função)
export default function Botao(props: any){
    return <button className="bg-green-500 p-2 rounded-md">
        {props.label}
    </button>
};

