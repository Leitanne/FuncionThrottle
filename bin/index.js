#! /usr/bin/env node
const throttleImport = require("../dist/throttle.js");
const program = require('commander');

program
    .version('1.0.0')
    .description('App for debounce function');

program
    .command('throttle <message>')
    .description('Ejecuta la funcion Throttle')
    .action(async(message) => await throttleImport.throttle(2000, () => console.log(message)))
    .action(console.log("Se llama dos veces a la función throttle pero deberia ejecutarse solo 1"))
    .action(async(message) => await throttleImport.throttle(2000, () => console.log(message)));

program.parse(process.argv);