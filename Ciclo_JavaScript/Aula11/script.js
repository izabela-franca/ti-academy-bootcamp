//Criando um objeto através de uma função
function Pessoa(nome, idade){
    this.nome = nome    
    this.idade = idade
}

let primeiraPessoa = new Pessoa("Izabela", 31);
console.log(primeiraPessoa)


//Criando um método para o Objeto usando Prototype
Pessoa.prototype.msg = function() {alert("Olá, " + this.nome)}
primeiraPessoa.msg()


//Outra forma de se criar um Objeto
let Pessoa2 = {
    nome: '',
    idade: '',
}

let segundaPessoa = Pessoa2
segundaPessoa.nome = "Diego"
segundaPessoa.idade = 30
console.log(Pessoa2)


//Criando uma Array de Objetos
let Pessoa3 = [
    {
        nome: "Ismael",
        idade: 63,
        sexo: "M"
    },
    {
        nome: "Vilma",
        idade: 58,
        sexo: "F"
    }
]

let terceiraPessoa = Pessoa3

console.log(terceiraPessoa[0])
console.log(terceiraPessoa[1])