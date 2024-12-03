const leia = require("readline-sync");

let nota1 = parseFloat(leia.question('digite sua nota da materia de Matematica '));
if( isNaN(nota1) ){
    console.log('erro digita um numero')
    return;
}

let nota2 = parseFloat(leia.question('digite sua nota da materia de Portugues '));
if(isNaN(nota1) ){
    console.log('erro digita um numero')
    return;
}
let nota3 = parseFloat(leia.question('digite sua nota da materia de ingles '));
if( nota3 == NaN ){
    console.log('erro digita um numero')
    return;
}
let nota4 = parseFloat(leia.question('digite a nota da materia de Historia '))

if( nota4 == NaN ){
    console.log('erro digita um numero')
    return;
}
// resultado


let resultado = (nota1 + nota2 + nota3+ nota4) / 4


console.log(` A média total das suas notas é : ${resultado.toFixed(2)}`)


