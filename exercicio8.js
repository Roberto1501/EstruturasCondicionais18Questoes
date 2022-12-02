// Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

let salario = parseFloat(prompt('Digite o seu salario'));
const teto = 1903.98;

if(salario < teto){

    document.write('Isento de IR');

}
else{

    document.write('Tributado no IR');
    
}