// 6. Insira no html 30 ( trinta ) números ímpares.

let numBase = 30;
let somaBase = numBase * 2;

for(numBase; numBase <= somaBase; numBase++){

    if(numBase % 2 !== 0){
        document.write('Os 30 numeros IMPARES sao: ' + numBase, '<br>');
    }

}