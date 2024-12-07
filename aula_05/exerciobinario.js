/*
Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:
Idade (Número inteiro)
Identidade de Gênero (Número Inteiro): 
1 – Mulher Cis
2 – Homem Cis
3 – Não Binário
4 – Mulher Trans
5 – Homem Trans
6 – Outros
Pessoa Desenvolvedora (Número Inteiro):
1 – Backend
2 – Frontend
3 – Mobile
4 – FullStack
Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar a leitura dos dados de um novo colaborador ou não (S/N). Caso seja pressionada a tecla N, mostre na tela:

O número de pessoas desenvolvedoras Backend
O número de Mulheres Cis e Trans desenvolvedoras Frontend
O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
O número de Não Binários desenvolvedores FullStack menores de 30 anos
O número total de pessoas que responderam à pesquisa
A média de idade das pessoas que responderam à pesquisa

Na construção do Algoritmo, utilize os seguintes conteúdos:
Entrada e Saída de dados
Operadores
Laços Condicionais
Laço de Repetição WHILE
*/



const leia = require('readline-sync');

//separando as variaveis que eu vou utilizar
let idade;
let idadeMaiorQuarenta = 0;
let idadeMenortrinta = 0;
let genero1 = 0;
let genero2 = 0;
let generoCisMaisQuarenta = 0;
let genero3 = 0;
let naobinarioStackBaixo = 0;
let genero4 = 0;
let genero5 = 0;
let generoTransMaisQuarenta = 0;
let genero6 = 0;

//contador de pessoas desenvolvedoras


let beckend = 0;
let Frontend = 0 ;
let Mobile = 0 ;
let FullStack = 0;

// começando a contagem para saber se a pessoa continua ou não no programa

let numero1;

// para saber se o laço continua ou não

let continua = true;




while (continua) {
idade = leia.questionInt('DIGITE A SUA IDADE POR FAVOR : ');
genero = leia.questionInt("DIGITE UM NUMERO ENTRE 1 E 6 PARA SABER SUA INDENTIDADE DE GENERO : " );

    if(genero === 1){
        genero1++
    }if  (genero === 2){
        genero2++
    }if(genero === 2 && idade > 40){
        generoCisMaisQuarenta++
        idadeMaiorQuarenta++
    }
    if (genero === 3){
        genero3++
    }if(genero == 3 && idade < 30){
        naobinarioStackBaixo++
        idadeMenortrinta++
    }
    if(genero === 4 ){
        genero4++
    }if(genero === 5){
        genero5++
    }if(genero === 5 && idade > 40){
        generoTransMaisQuarenta++
        idadeMaiorQuarenta++
    }
    if(genero === 6){
        genero6++
    }    

numero1 = leia.questionInt("DIGITE A PESSOA DESENVOLVEDORA ENTRE 1 E 4 : ")

    if(numero1 === 1){
        beckend++
    }if(numero1 === 2){
        Frontend++
    }if(numero1 === 3){
        Mobile++
    }if(numero1 === 4){
        FullStack++
    }


continua = leia.keyInYNStrict('deseja continuar a leitura dos dados de um novo colaborador ou não (S/N)')   

}
let soma = genero1+genero2+genero3+genero4+genero5+genero6+naobinarioStackBaixo+generoCisMaisQuarenta+generoTransMaisQuarenta
let mediaIdade = (idadeMaiorQuarenta + idadeMenortrinta) + idade / 9
console.log(`O numero de pessoas desenvolvedoras e de : ${beckend}`)
console.log(`O número de Mulheres Cis e Trans desenvolvedoras Frontend ${genero1} ${genero4} ${Frontend} `)
console.log(`O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos ${genero2} ${genero5} ${idadeMaiorQuarenta} `)
console.log(`O número de Não Binários desenvolvedores FullStack menores de 30 anos ${genero3} ${naobinarioStackBaixo}${idadeMenortrinta}`)
console.log(`total de pessoas que responderam foi${soma}`)
console.log(`A media da idade de pessoas é de ${mediaIdade}`)