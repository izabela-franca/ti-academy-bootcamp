//Declarando uma variável que precisa ser inteira e não negativa
let m = 1.6;

try {
    if (typeof m != 'number') throw new Error("Digite um número.")
    if (m < 0) throw new Error('O número não pode ser negativo.');
    if (m %1 !== 0) throw new Error('Digite um número inteiro.');
} catch(error) {
    console.log(`O erro é...${error}` )
} finally {
    console.log('Alcançou o finally.')
}