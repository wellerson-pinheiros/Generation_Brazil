/*
Escreva um algoritmo, que leia números inteiros via teclado, até que o número
 zero seja digitado. Ao final, mostre na tela a soma de todos os números 
 digitados, que sejam positivos. Veja o exemplo abaixo:


*/

const leia = require('readline-sync');


let contador;
let numeroFimContador = 0
let vetorPositivo = [];



do {
    contador = leia.questionInt('DIGITE UM NUMERO: ')
    if(contador > 0){
        vetorPositivo.push(contador);
      } 

}while(contador !== numeroFimContador );



let soma = vetorPositivo.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

 console.log('o resultado dos numeros digitados e positivos :  ' +  soma)


 finalizado