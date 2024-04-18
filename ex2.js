/*Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
nome: Elisa Renata Dos Santos Paiva */
function parametro(n1, n2, n3) {
    console.log("Verificando qual o menor n\u00FAmero.");
    return menor;
}
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
var n3 = parseInt(teclado("Digite o terceiro n\u00FAmero: "));
var maior = 0;
var mediano = 0;
var menor = 0;
if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
        mediano = n2;
        menor = n3;
    }
    else {
        mediano = n3;
        menor = n2;
    }
}
else if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n1 > n3) {
        mediano = n1;
        menor = n3;
    }
    else {
        mediano = n3;
        menor = n1;
    }
}
else if (n3 > n1 && n3 > n2) {
    maior = n3;
    if (n1 > n2) {
        mediano = n1;
        menor = n2;
    }
    else {
        mediano = n2;
        menor = n1;
    }
}
console.log(parametro(n1, n2, n3));
