window.onload = function(){

    //Calculando os preços de todos os produtos
    function calcular(idProduto, resultado){

        const preco = document.querySelectorAll(`#${idProduto} > li`);   //selecionando os elementos filhos
        const valorResultado = document.querySelector(`#${resultado}`);
        let totalFinal = 0;

        for( let i of preco ){
            totalFinal += Number(i.dataset.preco);
        }
        valorResultado.value = totalFinal;
    }


    //Percorrendo a lista para remover produtos ao serem selecionados
    function removerProdutos(id){

        const lista = document.querySelectorAll(`#${id} > li`);

        for(let produto of lista){
            produto.addEventListener('click',function(){
                produto.remove();
                calcular("produtos", "somatotal");
            })
        }
    }    

    removerProdutos("produtos");
    calcular("produtos", "somatotal");
}


