const fs = require("fs");


// Asynchronous file write
console.log("1");

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err, "error in reading file");
  } else {
    console.log(data, "data in async");
  }
});

console.log("2");
console.log("3");
console.log("4");





// Synchronous file write
console.log('a')
console.log('b')
const syncData= fs.readFileSync('hello.txt','utf-8')
console.log(syncData,'syncData')
console.log('c')
console.log('d')

