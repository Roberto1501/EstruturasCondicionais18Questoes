// Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”. 

const idade = parseInt(prompt('Digite a sua idade'));
const habilitado = (prompt('Digite se voce tem habilitação: S/N'));

if (idade >= 18 && habilitado === 'S') {

    document.write('Você pode dirigir');

    
} else if( habilitado !== 'S' ){
    document.write('Você não pode dirigir');
}
