/*Desafio 1
Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.
Nome: Elisa Renata dos Santos Paiva 
*/
function parametro (raio:number): void{
    console.log(`Calculando o volume da esfera.`)

    let volume = ((4/3)*(3.14*(raio^3)))
    console.log(`O valor do volume da esfera é ${volume}`)
}

const teclado = require (`prompt-sync`)();

let raio: number = parseFloat(teclado(`Digite o valor do raio: `))
parametro(raio)