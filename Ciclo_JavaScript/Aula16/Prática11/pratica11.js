window.onload = function(){
    const n1 = document.querySelector("#primeiroNumero")
    const n2 = document.querySelector("#segundoNumero")
    const res = document.querySelector("#resultado")

    n2.addEventListener("blur", function(){
        res.value = Number(n1.value) + Number(n2.value)
    })
}


