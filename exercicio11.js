// Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso. 


let turno = prompt('Digite o turno que você estuda \n [M] \n [V] \n [N]');

   switch (turno) {
       case 'M':

           alert('Bom Dia');
           break;

       case 'V':

           alert('Boa Tarde');
           break;

       case 'N':

           alert('Boa noite');
           break;

       default:

           alert('Valor invalido');
           break;
   }