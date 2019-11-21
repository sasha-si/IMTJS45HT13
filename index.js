'use string'

const fs = require('fs');

let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

let data2 = "Hello everyone!";
fs.writeFileSync('data1.txt', data2);

console.log(fs.readFileSync('data1.txt', 'utf-8'));

fs.appendFileSync('data1.txt', `\n${data}`);

console.log(fs.readFileSync('data1.txt', 'utf-8'));