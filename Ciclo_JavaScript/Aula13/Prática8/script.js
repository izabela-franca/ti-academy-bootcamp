let Frutas = [
    {
        nome: "banana",
        preço: 2.25
    },
    {
        nome: "maçã",
        preço: 5.40
    },
    {
        nome: "uva",
        preço: 5.90
    },
    {
        nome: "abacate",
        preço: 3.80
    }
]

function imprimirFrutas (obj){
    for(let produto of obj){
        for(let p in produto){
            console.log(`${p} -> ${produto[p]}`)
        }
    }
}

imprimirFrutas(Frutas)