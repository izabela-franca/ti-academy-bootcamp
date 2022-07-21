let nomes = ["Izabela", "Diego", "Vilma", "Ismael", "Murilo"];

const manipulandoArray = (nome, nomeInserido, indice) => {
    console.log(`Quantidade de elementos do Array: ${nome.length}.`);
    console.log(`Você escolheu o índice ${indice}, que é o elemento ${nome[indice]}.`)
    console.log(`O nome ${nomeInserido} foi inserido no Array.`)
    nome.push(nomeInserido);
    console.log(`A quantidade de elementos atual do Array é ${nome.length}.`)
}

manipulandoArray(nomes, "Ana", 3);