window.onload = function() {
    const ulPai = document.querySelectorAll("#ulPai")   //Selecionando quem será o alvo

    ulPai.forEach(function(lista){  //forEach() recebendo como parâmetro uma função de call-back
        lista.addEventListener('click', function(elemento){
            alert(elemento.target.innerHTML)    //O targer mostra quem será o alvo a receber a ação, neste caso, o click.
        })
    })
}

