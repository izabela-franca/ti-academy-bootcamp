//Criando uma Arrow Function
let msg = () => {alert("Exemplo de uma Arrow Function.")}


//Criando uma função para retornar um valor
function retornandoValor() {
    let nome = "Izabela"
    return nome;
}


//Criando Funções Auto-executáveis (não precisam ser chamadas)
(function(){
    alert("Exemplo de função auto-executável.")
})()   


//Convertendo Strings and Number com Number()
let v1 = prompt("Insira o primeiro valor: ");
let v2 = prompt("Insira o segundo valor:")

const soma = (n1, n2) => {
    let resultado = Number(v1) + Number(v2);
    document.write(resultado);
}

soma(v1, v2);
