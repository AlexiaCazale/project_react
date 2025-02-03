//Função construtora
function Botao(props){
    this.label = props?.label ?? "Ok";
}

let botao1 = new Botao();
console.log(botao1.label);

let botao2 = new Botao({label: "Cancelar"});
console.log(botao2.label);