//Declarando Arrays
let listaFrutas = ["banana", "maçã", "uva", "abacate", "mamão"] 
let listaLegumes = ["cenoura", "pepino", "chuchu", "beterraba"]


//Aplicando concat() -> Une dois ou mais Arrays
let listaMercado = listaFrutas.concat(listaLegumes);
console.log(listaMercado);


//Aplicando indexOf() -> Procura um determinado elemento de um Array. retorna uma posição
let buscaFruta = "uva";

if(listaFrutas.indexOf(buscaFruta) != (-1)){    //retorna -1 se não encontrado
    console.log(`A fruta ${buscaFruta} foi encontrada na posição ${listaFrutas.indexOf(buscaFruta)}.`);
} else {
    console.log(`A fruta ${buscaFruta} não foi encontrada.`) 
}


//Aplicando join() -> Transforma elementos de um Array em uma String
console.log(listaFrutas.join());


//Aplicando push() -> Insere elementos no fim do Array
let frutaAdicionada = "laranja"

if (listaFrutas.indexOf(frutaAdicionada) == -1){
    console.log ("A fruta foi adicionada.")
    listaFrutas.push(frutaAdicionada);
} else {
    console.log("Essa fruta já está na lista.")
}

console.log(listaFrutas);


//Aplicando pop() -> Remove o último elemento de um Array
listaFrutas.pop();
console.log(listaFrutas)


//Aplicando reverse() -> Inverte a ordem dos elementos de um Array
listaFrutas.reverse();
console.log(listaFrutas);


//Aplicando shift() -> Remove o primeiro elemento de um Array
listaFrutas.shift();
console.log(listaFrutas);


//Aplicando unshift() ->Insere um elemento no início do Array
listaFrutas.unshift("limão");
console.log(listaFrutas);


//Aplicando splice() -> Corta ou remove um elemento de um Array em um ponto indicado
listaFrutas.splice(2, 1)
console.log(listaFrutas);


//Aplicando sort() -> Ordena elementos de um Array em ordem crescente (alfabética ou numérica)
listaFrutas.sort();
console.log(listaFrutas);
