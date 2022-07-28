window.onload = function(){
    
    let produtos = [
        {descricao: "Bolacha Trakinas", preco: 2.20},
        {descricao: "Leite Piracanjuba", preco: 5.90},
        {descricao: "Sabonote Dove", preco: 3.80}
    ]

    const listaProdutos = document.querySelector("#listaProdutos");
    const Total = document.querySelector("#total");

    //Adicionando elementos dinamicamente
    ( function () {
        let totalFinal = 0;
        for( let pro of produtos ){  //Lendo a Array
            const filhoLi = document.createElement("li");
            
            for(let listaP in pro){  //Lendo os Objetos
                if (listaP == "preco"){
                    listaProdutos.appendChild(filhoLi).setAttribute("data-preco", pro[listaP]);
                    totalFinal += pro[listaP];
                } else {
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }
            }
        }
        Total.value = totalFinal.toFixed(2);
    } )(produtos);
}

