// Informe um valor a uma variável e imprima no console se o número
// é primo. 

let numPrimo = parseInt(prompt('Digite um numero: '));
let numDivisor = 2;

do{
    numDivisor += 1;

}while(numPrimo % numDivisor !== 0);

if(numPrimo === numDivisor){
    document.write(`[${numPrimo}] é um numero primo`);
}else{
    document.write(`[${numPrimo}] NÃO é um numero primo`);
}