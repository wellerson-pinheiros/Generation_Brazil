let leia = require('readline-sync');

let numero1 = leia.questionInt('DIGITE O PRIMEIRO NUMERO');
let numero2 = leia.questionInt('DIGITE O SEGUNDO NUMERO ');
let numero3 = leia.questionInt('DIGITE O TERCEIRO NUMERO');
 let resultado;


if (numero1 + numero2 > numero3){
    resultado = numero1 + numero2;
    console.log(`A soma do primeiro numero ${numero1} + o segundo numero ${numero2} é ${resultado} sendo  Maior > ${numero3}`)
}

if (numero1 + numero2 < numero3){
    resultado = numero1 + numero2;
    console.log(`A soma do primeiro numero ${numero1} + o segundo numero ${numero2} é ${resultado} sendo menor < ${numero3}`)
}

if (numero1 + numero2 === numero3){
    resultado = numero1 + numero2;
    console.log(`A soma do primeiro numero ${numero1} + o segundo numero ${numero2} é ${resultado} sendo igual = ${numero3}`)
}