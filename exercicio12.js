// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

let idade = parseInt(prompt('Digite sua idade: '));

if( idade >= 18 && idade <= 67){
    document.write('Voce pode doar sangue');
}else if(idade < 18) {
    document.write('Voce é menor de idade e nao pode doar sangue');
}else if(idade > 67) {
    document.write('Voce é um idoso e nao pode doar sangue');
}