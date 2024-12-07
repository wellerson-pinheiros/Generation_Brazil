/*
Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. Veja o exemplo abaixo:

ENTRADA
SAÍDA

Digite o 1º número: 2

Digite o 2º número: 7

Digite o 3º número: 31

Digite o 4º número: 4

Digite o 5º número: 11

Digite o 6º número: 6

Digite o 7º número: 9

Digite o 8º número: 25

Digite o 9º número: 8

Digite o 10º número: 15


Total de números pares: 4

Total de números ímpares: 6




Na construção do Algoritmo, utilize os seguintes conteúdos:
Entrada e Saída de dados
Operadores
Laços Condicionais
Laço de Repetição FOR
*/

const leia = require('readline-sync')

let arr = [10];
let pergunta;

let par = [];
let impar = [] ;
for(let i = 0; i < 10; i++){

    pergunta = leia.questionInt('DIGITE 10 NUMEROS : ')
    arr.push(pergunta)
}

for(let i = 0; i<arr.length; i++ ){
if(arr[i] % 2 == 0 ){
    par.push(arr[i])

}else if(arr[i] % 2 == 1 ){
    impar.push(arr[i])

}
}
console.log(`os numeros par ${par.length} e os impar sao ${impar.length}`)