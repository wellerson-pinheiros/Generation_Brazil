const leia = require('readline-sync');

let nome = leia.question('digite seu nome: ');


console.log('1 - idade entre 0 a 10 anos');
console.log('2 - idade entre 11 a 29 anos');
console.log('3 - idade entre 30 a 45 anos');
console.log('4 - idade entre 46 a 59 anos');
console.log('5 - idade entre 60 a 65 anos');
console.log('6 - idade acima de 66 anos');

let faixaEtaria = leia.questionInt('digite a faixaEtaria! ');
let valor;


switch(faixaEtaria){
    case 1 :
        valor = 100;
        break;
    case 2 :
        valor = 200;
        break;
    case 3 : 
        valor = 300;
        break;
    case 4 : 
        valor = 400;
        break;
    case 5 : 
        valor = 500;
        break;
    case 6 :
        valor = 600;
        break;
    default :
        console.log('Eroo');
         process.exit(0);
}                   

console.log(` O Valor do seu plano de saude é ${valor}`)