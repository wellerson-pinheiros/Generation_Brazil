const leia = require('readline-sync')


let nomeFuncionario = leia.question('Qual o nome do Funcionario ? ');
let salario = leia.questionFloat('qual o salario do colaborador ?')
let codigoColaborador = leia.questionInt('qual o id do funcionario um numero entre 1 e 6 ?' );




switch (codigoColaborador){
    case 1:    
        console.log(`Nome do colaborador: ${nomeFuncionario} o cargo do funcionario(a) e Gerente e o novo salaraio e ${salario + (10 * salario).toFixed(2)} ` )
        break;
    case 2:
        console.log(`Nome do colaborador: ${nomeFuncionario} o cargo do funcioraio(a) e Vendedor e o novo salaraio e ${salario + (7 * salario).toFixed(2)} ` )
        break;
    case 3:
        console.log(`Nome do colaborador: ${nomeFuncionario} o cargo do funcioraio(a) e Supervisor e o novo salaraio e ${salario + (9 * salario).toFixed(2)} ` )
        break;
    case 4:
        console.log(`Nome do colaborador: ${nomeFuncionario} o cargo do funcionario(a) e Motorista e o novo salaraio e ${salario + (6 * salario).toFixed(2)} ` )
        break;
    case 5:
        console.log(`Nome do colaborador: ${nomeFuncionario} o cargo de  funcionario(a) e Estorquista e o novo salaraio e ${salario + (5 * salario).toFixed(2)} ` )
        break;
    case 6:
        console.log(`Nome do colaborador: ${nomeFuncionario} o cargo do funcionario(a) e Tecnico Ti e o novo salaraio e ${salario + (8 * salario).toFixed(2)} ` )            
        break;   
    }