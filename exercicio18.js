


let price = parseInt(prompt('Digite o valor da compra: '));
let parcela = parseInt(prompt('Digite o número de parcelas: \n  [1] \n [2] \n [3] \n [4] \n [5] \n [6] \n [7] \n [8] \n [9] \n [10] \n [11] \n [12] \n [13] \n [14] \n [15]  '));
let finalPrice = 0;

switch (parcela) {
    case 1:

        finalPrice = price - ((price / 100) * 2.5)
        document.write(`O valor com desconto a ser pago é R$${finalPrice}`)
        break;

    case 2:
    case 3:
    case 4:
    case 5:

        document.write(`O valor a ser pago é R$${price}`)
        break;

    case 6:
    case 7:
    case 8:
    case 9:
    case 10:

        finalPrice = price + ((price / 100) * 6)
        document.write(`O valor a ser pago com adicional de 6% de juros é R$${finalPrice}`)
        break;



    case 11:
    case 12:
    case 13:
    case 14:
    case 15:

        finalPrice = price + ((price / 100) * 13)
        document.write(`O valor a ser pago com adicional de 11% de juros é ${finalPrice}`)
        break;

    default: 

        break;

    }