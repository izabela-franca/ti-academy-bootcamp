let palavra = prompt("Digite uma palavra: ");

(function(){
    document.write(`Esta palavra contém ${palavra.length} caracteres.<br>`);
    document.write(`A palavra em maiúscula ficou ${palavra.toUpperCase()}.<br>`);
    document.write(`A letra "${palavra[2]}" está na 3ª poisção na palavra.<br>`);
    document.write(`${palavra} ficou ${palavra.replace(palavra[2], 'X')}.`);
})(palavra);
