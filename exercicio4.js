// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

let diaSemana = parseInt(prompt('Digite o dia da semana de 1 a 7: '));


switch (diaSemana) {
    case 1:

        dia = "Domingo";
        break;

    case 2:

        dia = "Segunda-feira";
        break;

    case 3:

        dia = "Terça-feira";
        break;

    case 4:

        dia = "Quarta feira";
        break;

    case 5:

        dia = "Quinta-feira";
        break;

    case 6:

        dia = "Sexta-feira";
        break;

    case 7:

        dia = "Sabado";
        break;

    default:
        alert("Dia nao reconhecido");
        break;
}

document.write('O dia da semana é: ' + dia );

