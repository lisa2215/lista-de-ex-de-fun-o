/*Exercício 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.
Nome: Elisa Renata Dos Santos Paiva */
function verificar(nInteiro) {
    console.log("Verificando se o n\u00FAmero ".concat(nInteiro, " \u00E9 par."));
    var resto = numero % 2;
    if (resto == 0) {
        console.log("O n\u00FAmero \u00E9 par!");
        return 1;
    }
    else {
        console.log("O n\u00FAmero \u00E9 \u00EDmpar!");
        return 0;
    }
}
var teclado = require("prompt-sync")();
var numero = parseInt(teclado("Digite um n\u00FAmero inteiro: "));
console.log(verificar(numero));
