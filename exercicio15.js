// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let a = parseInt(prompt('Digite o valor do Lado A')) 
let b = parseInt(prompt('Digite o valor do lado B'))
let c = parseInt(prompt('DIgite o valor do lado C'))

if( a < b + c && b < a + c && c < a + b ){

    if( a == b && b== c ) {
        document.write("O triangulo é equilatero");
    }else if( a == b || a == c || b == c ) {
        document.write("O triângulo é Isósceles.");
    }else {
        document.write("O triângulo é Escaleno.");
    }

}