//Capturando elementos usando Data Attribute
window.onload = function(){
    const btnBuscar = document.querySelector("#btnBuscar")
    const txtNomeCliente = document.querySelector("#nomeCliente")

btnBuscar.addEventListener("click", function(){
    let dataSetCliente = txtNomeCliente.dataset.codigo  //acessando o data attribute codigo
    console.log(dataSetCliente)
})

}