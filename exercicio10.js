// Tendo como entrada a altura e o sexo (codificado da seguinte
// forma: 1 para sexo feminino e 2 para sexo masculino) de uma
// pessoa, construa um programa que calcule e mostre seu peso ideal,
// utilizando as seguintes fórmulas:
// - para homens: (72.7 * Altura) – 58
// - para mulheres: (62.1 * Altura) – 44.7 

let altura = parseFloat(prompt('Digite a altura: '));
let sexo = parseInt(prompt('Informe o seu sexo: \n Feminio [1] \n Masculino [2]'));
let pesoIdeal = 0;

switch (sexo) {
    case 1:

         pesoIdeal = (62.1 * altura) -44.7

         document.write(`O seu peso ideal é ${pesoIdeal.toFixed(2)} kg`)
        
        break;

    case 2 :

        pesoIdeal =  (72.7 * altura) - 58

        document.write(`O seu peso ideal é ${pesoIdeal.toFixed(2)} kg`)

        break;
        


    default:

        alert('Digite um sexo valido')
        break;
}



