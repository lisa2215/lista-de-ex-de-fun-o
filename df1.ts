
/*Desafio 1
Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.
Nome: Elisa Renata Dos Santos Paiva 
*/

function isPrimo(n1:number, div:number=2): boolean{
    // Verifica se n1 é divisível por div
    if (n1 % div == 0) { // Se n1 for igual a div, então é primo        
        return n1 == div;
    }
    // Se div alcançar a raiz quadrada de n1 e não houve divisão exata, então é primo
    if (div * div > n1) {
        return true;
    }

    return isPrimo(n1, div+1)
}

function listarNumerosPrimos(n1:number=2, limite:number=1000): void{

    if (isPrimo(n1)) { // Verifica se n1 é primo
        // Se for primo, o imprime
        console.log(n1);
    }
    // Se num não atingiu o limite, verifica o próximo número
    if (n1< limite) {
        n1++;
        listarNumerosPrimos(n1, limite);
    }
}

// Chamando a função para listar todos os números primos até 1000
listarNumerosPrimos();