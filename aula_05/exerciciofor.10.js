/*
Elabore um algoritmo que leia as notas de uma turma com 10 participantes, 
dos 4 bimestres de um ano. As 4 notas de cada participante serão armazenadas
 em uma linha de uma matriz de números reais, logo cada linha da matriz 
 representará as notas de um participante. Em um vetor de números reais, 
 armazene as médias de cada participante e exiba as médias de cada um na tela.
*/


const leia = require ("readline-sync");

let vetorMedia = [];

// linha da matriz

let arr = new Array(10);

// colunas 

for (let i = 0; i < arr.length; i ++){
    arr[i] = Array(4);
};

// percorrendo o array a adicionando valores 

for(let indicelinha = 0; indicelinha < arr.length; indicelinha ++){ // percorrendo as linhas do meu arry
    for(indiceColuna = 0; indiceColuna <arr[indicelinha].length ; indiceColuna ++){ // adicionando colunas a minha matriz 
        arr[indicelinha] [indiceColuna] = leia.questionFloat('DIGITE AS 4 NOTAS DO BIMESTRE ? ');
        console.table(arr)
        
    }
}

let soma = 0;

for (let i = 0 ; i < arr.length ; i ++){
    let somaDaLinha = arr[i].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let media = somaDaLinha/4

console.log('A SOMA DA MÉDIA DA NOTAS ' + media)

    vetorMedia.push(media)
}

// a media armazenada em um vetor em numeros reais


    
    console.table(vetorMedia);





