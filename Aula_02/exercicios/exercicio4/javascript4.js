const leia = require('readline-sync');

let numero1 = parseFloat(leia.question('digite o primeiro numero ' ));
    if(isNaN(numero1)){
        console.log('erro digita um numero valido')
        return;
}
let numero2 = parseFloat(leia.question('digite o segundo numero '));
    if(isNaN(numero1)){
        console.log('erro digita um numero valido')
        return;
}

let numero3 = leia.question(('digite o terceiro numero '));
    if(isNaN(numero1)){
        console.log('erro digita um numero valido')
        return;
}
let numero4 = parseFloat(leia.question('digite o quarto10.0 numero '));


    if(isNaN(numero1)){
        console.log('erro digita um numero valido')
        return;
}

// resultado 


let diferenca = (numero1*numero2)-(numero3*numero4)


console.log('A diferença entre os numero é de: ' + diferenca );