/*Exercício 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.
Nome: Elisa Renata Dos Santos Paiva */





function verificar (nInteiro: number): number{
console.log(`Verificando se o número ${nInteiro} é par.`)  
    let resto = numero % 2;
    
    if(resto == 0){
        console.log(`O número é par!`)
        return 1
    }
    else{
        console.log(`O número é ímpar!`)
        return 0
    }
}

const teclado = require (`prompt-sync`)();

let numero: number = parseInt(teclado(`Digite um número inteiro: `));

console.log(verificar(numero));