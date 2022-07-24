function inverterPalavra(){
    let palavra = prompt("Digite uma palavra: ")
    for(let p = (palavra.length-1); p >= 0; p--){
        document.write(palavra[p])
    }
}

inverterPalavra()