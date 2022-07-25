window.onload = function(){
    const tabuada = document.querySelector("#tabuada")
    const botao = document.querySelector("#calcular")
    const resp = document.querySelector("#resposta")
    
    botao.addEventListener('click', function(){
        let numero = Number(tabuada.value)
    
        if (typeof numero !== "number"){
            resp.innerHTML = "Digite um valor numérico válido."
        } else {
            if (numero < 1 || numero > 10){
                resp.innerHTML = "Digite um valor entre 1 e 10."
            } else {
                resp.innerHTML = `Tabuada do ${numero}: <br>`
                for (i = 0; i <= 10; i++){
                    resp.innerHTML += `${numero} x ${[i]} = ${numero*[i]}  <br>`
                }
            }
        }
    })
}
