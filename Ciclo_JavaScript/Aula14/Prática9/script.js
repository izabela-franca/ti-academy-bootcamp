
function tabuada(numero) {
    if (typeof numero !== "number"){
        alert("Digite um valor numérico válido.")
    } else {
        if (numero < 1 || numero > 10){
            alert("Digite um valor entre 1 e 10.")
        } else {
            document.write(`Tabuada do ${numero}: <br>`)
            for (i = 0; i <= 10; i++){
                document.write(`${numero} x ${[i]} = ${numero*[i]}  <br>`)
            }
        }
    }
}

tabuada(8)