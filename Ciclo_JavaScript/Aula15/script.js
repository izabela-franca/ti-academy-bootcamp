//Aplicando typeOf
let fruta = "Laranja"
console.log(typeof fruta)

let resultado = 15
console.log(typeof resultado)

let resposta = true
console.log( typeof resposta)


//Adicionando eventos
window.onload = function(){
    const botao = document.getElementById("btn")
    const txtBox = document.querySelector("#txtBox")
    const caixa = document.querySelector("#caixa")
    botao.addEventListener("click", function(){
        caixa.innerHTML += txtBox.value +" " //o que for escrito no txtbox será enviado para a div no HTML
    })
}


