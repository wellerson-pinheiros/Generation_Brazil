let leia = require('readline-sync');

let numero = leia.questionInt('DIGITE UM NUMERO ')

if( numero % 2 == 0 && numero > 0 ){
    console.log(`O numero ${numero} ele é par e positivo!`)
} else if (numero % 2 != 0 && numero < 0){
    console.log(`O numero ${numero} e impar e negativo`)
}else if ( numero % 2 == 0 && numero < 0 ){
    console.log(`O numero ${numero} ele é par e negativo!`)}
 else if(numero % 2 != 0 && numero > 0 ){
                    console.log('o numero é impar e positivo') 
    }
