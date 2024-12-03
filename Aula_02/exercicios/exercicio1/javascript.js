 const leia  = require("readline-sync");

 const name = leia.question('what your name: ?');

 console.log(`Hello my friend ${name}` )

const salario = parseFloat(leia.question ('what your salary? '));

let newSalary = salario;

const abono = parseFloat(leia.question('describe an allowance?'))

let newAbono = abono

let newSalaryAbono = newSalary + newAbono;


console.log("Hello my friend, " + name + " your new is salary " + newSalaryAbono.toFixed(2)  + " this is your new salary")
 


