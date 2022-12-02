// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let diaSemana = parseInt(prompt('Digite o dia da semana de 1 a 7: '));

if(diaSemana == 1){
    dia = "Domingo";
}else if(diaSemana == 2){
    dia = "Segunda-feira";
}else if(diaSemana == 3){
    dia = "Terça-feira";
}else if(diaSemana == 4){
    dia = "Quarta feira";
}else if(diaSemana == 5){
    dia = "Quinta-feira";
}else if(diaSemana == 6){
    dia = "Sexta-feira";
}else if(diaSemana == 7){
    dia = "Sabado";
}else {
    alert("Dia nao reconhecido");
}

document.write('O dia da semana é: ' + dia );

