// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

let numBase = parseInt(prompt('Digite um numero: '));

for(let i = 0; i < numBase; i++){

    if(numBase % 2 !== 0){
        document.write(`Os numeros Impares sao: ${numBase} <br>` );
    }

}