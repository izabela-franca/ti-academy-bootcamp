let nome = "Izabela França"

//Aplicando match() -> procura uma palavra em uma String
console.log(nome.match("z"))


//Aplicando search() -> procura pela ocorrência e retorna a posição na cadeia da String
console.log(nome.search(/Z/i)) // usa-se o / / i para deixar de ser case sentive durante a busca


//Aplicando replace() -> substitui uma string por outra
let msg = "Vamos substituir a letra A."
msgSubstituida = msg.replace("A", "Z"); //substitui apenas a primeira ocorrência
msgSubstituida2 = msg.replace(/a/gi, "Z"); //substitui todas as ocorrências
console.log(msgSubstituida);
console.log(msgSubstituida2);


//Aplicando localeCompare() -> Faz a comparação entre duas strings
let animal = "gato"
let mamifero = "gato"

console.log(animal.localeCompare(mamifero));


//Aplicando toLowerCase() -> Faz a conversão de uma string inteira para caracteres minúsculos
console.log(nome.toLowerCase());


//Aplicando toUpperCase() -> Faz a conversão de uma string inteira para caracteres maiúsculos
console.log(nome.toUpperCase());


//Aplicando trim() -> Faz a remoção de espaços antes e depois da string especificada
let exemplo = "    Removendo os espaços.  "
console.log(exemplo.trim());