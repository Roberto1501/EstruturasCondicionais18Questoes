// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

let numBase = parseInt(prompt('Digite um numero: '));
let numTotal = [];
let soma = numBase * 3;

 while (soma < 500) {
    
    
    numTotal.push(soma);
    soma++;
    // console.log(numTotal);
 
    var lastNum = numTotal.pop();

}

 console.log('O ultimo valor é: ' + lastNum);
 