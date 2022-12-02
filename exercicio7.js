// Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100. 

let numBase = parseInt(10);
let soma = 0;

do{
    numBase += 1;
    soma = soma + numBase;
}while(numBase < 100);

document.write(`A soma dos numeros entre 10 e 100 é de: ${soma}` );