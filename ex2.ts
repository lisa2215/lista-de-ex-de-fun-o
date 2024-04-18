/*Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
nome: Elisa Renata Dos Santos Paiva */

function parametro (n1:number,n2:number,n3:number): number {
    console.log(`Verificando qual o menor número.`)
    return menor
}

const teclado = require (`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));
let n3: number = parseInt(teclado(`Digite o terceiro número: `));

let maior: number = 0;
let mediano: number = 0;
let menor: number = 0;

if (n1 > n2 && n1 > n3) {
        maior=n1

        if (n2 > n3){
            mediano=n2
            menor=n3
        }
        else{
            mediano=n3
            menor=n2
        }
}

else if (n2 > n1 && n2 > n3) {
        maior=n2

        if (n1 > n3){
            mediano=n1
            menor=n3
        }
        else{
            mediano=n3
            menor=n1
        }
}

else if (n3 > n1 && n3 > n2) {
        maior=n3

        if (n1 > n2){
            mediano=n1
            menor=n2
        }
        else{
            mediano=n2
            menor=n1
        }
}

console.log(parametro(n1, n2, n3));