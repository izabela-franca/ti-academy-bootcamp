window.onload = function(){

    //Criando função para receber dados 
    function resultadoCep(dadosCep){
        for( let campo in dados) {
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value= dados[campo];
            }
        }    
    }
   
    //Realizando Fetch
    let dadosCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        try { 
        let dadosFetch = await fetch(url);        
        let dadosJson = await dadosFetch.json();
        resultadoCep(dadosJson);
        } catch(error){
            alert(error);
        }             
    }
   
    //Mapeando elementos
    const btnBuscar = document.querySelector("#buscarCep");
    const caixaCEp      = document.querySelector("#NumeroCep");
   
    btnBuscar.addEventListener('click',function(){
        dadosCep(caixaCEp.value);       
    })
}