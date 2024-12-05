const leia = require('readline-sync');



console.log("CARDAPIO")
console.log("1 - Cachorro Quente");
console.log("2 - X-Salada");
console.log("3 - X-Bacon");
console.log("4 - Bauru");
console.log("5 - Refrigerante");
console.log("6 - Suco de laranja");

let opcao = leia.questionInt("Digite um numero entre 1 - 6 ? ")
let quantidade = leia.questionInt("Quantas unidades voce vai querer? ")





switch(opcao) {
case 1:
    preco = 10.00
    console.log(`O produto escolhido foi : 1 - Cachorro Quente.  Quantidade ${quantidade}
        Valor  ${preco * quantidade} `)
        break;

case 2:
    preco = 15.00
    console.log(`O produto escolhido foi : 2 - X-Salada .  Quantidade ${quantidade}
        Valor  ${preco * quantidade.toFixed(2)} `)
        break;

case 3:
    preco = 18.00
    console.log(`O produto escolhido foi : 3 - X-Bacon .  Quantidade ${quantidade}
        Valor  ${preco * quantidade.toFixed(2)} `)
        break;
case 4:
    preco = 12.00
    console.log(`O produto escolhido foi : 4 - Bauru .  Quantidade ${quantidade}
        Valor  ${preco * quantidade.toFixed(2)} `)
        break;
case 5:
    preco = 8.00
    console.log(`O produto escolhido foi : 5 - Refrigerante .  Quantidade ${quantidade}
        Valor  ${preco * quantidade.toFixed(2)} `)
        break;    
case 6:

preco = 13.00
    console.log(`O produto escolhido foi : 6 - Suco de laranja.  Quantidade ${quantidade}
        Valor  ${preco * quantidade.toFixed(2)} `)
        break;  

        default:
        console.log('Eroo, Opcao invalida')




}



