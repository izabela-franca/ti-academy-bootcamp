window.onload = function(){
    const txtProduto = document.querySelector("#produto")
    const btnCadastrar = document.querySelector("#cadastrar")
    const lista = document.querySelector("#listaDeProdutos")

    btnCadastrar.addEventListener("click", function(){
        let listaCriada = document.createElement("li")   //Criando um elemento dinamicamente
        lista.appendChild(li).setAttribute("class", "listaDeFrutas")    //Inserindo dinamicamente atributos nos elementos filhos 
        lista.appendChild(listaCriada).textContent =  txtProduto.value //Inserindo um elemento filho dentro de um elemento pai e adicionando um texto

    })


}