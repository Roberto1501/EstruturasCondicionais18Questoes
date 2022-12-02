// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

var anoAtual = new Date().getFullYear();
var anoNascimento = parseInt(prompt("Digite seu ano de nascimento"));


const resultAno = anoAtual - anoNascimento;

const resultFinal = ((resultAno >= 16) ? 'Voce pode votar nesse ano' : 'Voce não pode votar nesse ano');

document.write(resultFinal);