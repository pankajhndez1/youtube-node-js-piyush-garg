const {add,sub,printGoodbye,printHellow,multiplyInput} = require('./math.js');
const builtInPackages=require('fs');
console.log(builtInPackages,'builtInPackages')
console.log('hello world');
console.log(add(1,2));
console.log(sub(2,10));
console.log(multiplyInput(2,19))
console.log(printGoodbye())
console.log(printHellow())