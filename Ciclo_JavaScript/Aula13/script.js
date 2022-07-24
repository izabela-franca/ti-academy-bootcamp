//Declarando um Objeto
let Pessoas = {
    nome: "Izabela França",
    idade: 31,
    cidade: "São Carlos"
}


//Aplicando for in (para Objetos)
for(let chaves in Pessoas){
    console.log(chaves)
}


//Declarando uma Array
let frutas = ["banana", "maçã", "pêra", "manga"]


//Aplicando for of (para Arrays)
for(let nomeFruta of frutas){
    console.log(nomeFruta)
}


//Declarando uma Array de Objetos
let ListaDePessoas = [
    {
        nome: "Izabela França",
        idade: 31,
        cidade: "São Carlos"
    },
    {
        nome: "Diego Doce",
        idade: 30,
        cidade: "Itirapina"
    },
    {
        nome: "Vilma da Silva",
        idade: 58,
        cidade: "São Paulo"
    }
]

let familia = ListaDePessoas;


//Aplicando for of em uma Array de Objetos
for(let membrosFamilia of familia){
    console.log(membrosFamilia.nome)
}