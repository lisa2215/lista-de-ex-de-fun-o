/*Desafio 1
Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.
Nome: Elisa Renata dos Santos Paiva
*/
function parametro(raio) {
    console.log("Calculando o volume da esfera.");
    var volume = ((4 / 3) * (3.14 * (raio ^ 3)));
    console.log("O valor do volume da esfera \u00E9 ".concat(volume));
}
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("Digite o valor do raio: "));
parametro(raio);
