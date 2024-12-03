const leia = require('readline-sync');

let salarioBruto = parseFloat(leia.question('Qua o seu salario bruto? '));
if( isNaN(salarioBruto)){
    console.log('erro')
    return;
}

let adicionalNoturno = parseFloat(leia.question('Qual o adicional noturno?'));
if( isNaN(salarioBruto)){
    console.log('erro')
    return;
}
let horasExtras = parseFloat(leia.question('qual o valor de hora exta recebido? '));
if( isNaN(salarioBruto)){
    console.log('erro')
    return;
}
let desconto = parseFloat(leia.question('qual o valor do desconto? '));
if( isNaN(salarioBruto)){
    console.log('erro')
    return;
}

// total liquido  com descontos!


const total = (salarioBruto + adicionalNoturno + horasExtras) - desconto;


console.log(`O total do salario liquido é:  ${total.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}`);
