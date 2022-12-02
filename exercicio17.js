// Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores. 

let numeroTot = parseInt(prompt('Digite o número total de eleitores: '));
let numeroBrancos = parseInt(prompt('Digite o número de votos brancos'));
let numeroNulos = parseInt(prompt('Digite o numero de votos nulos: '));
const validos = numeroTot - (numeroBrancos + numeroNulos);
let percentageBrancos = (numeroBrancos/numeroTot)*100;
let percentageNulos = (numeroNulos/numeroTot)*100;
let percentageValidos =(validos/numeroTot)*100;

if(numeroBrancos>numeroTot || numeroNulos>numeroTot){

    alert('Numero de votos superior ao total de eleitores');

}else{

    document.write(`O numero total de eleitores foi ${numeroTot} <br />`);
    document.write(`O número total de bracos foi ${numeroBrancos} e o percentual foi de ${percentageBrancos.toFixed(2)}% <br />`);
    document.write(`O número total de votos nulos foi ${numeroNulos} e o percentual foi ${percentageNulos.toFixed(2)}% <br />`);
    document.write(`O numero de votos válidos foi ${validos} e o percentual foi ${percentageValidos.toFixed(2)}% <br />`);

}
