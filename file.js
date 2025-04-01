const fs = require("fs");

const val = fs.writeFileSync("hello.txt", "hello world");
console.log(val, "val");

fs.writeFile("abc.txt", "Hey There !!", (err) => {
  if (err) {
    console.log(err, "err write file async content");
  }
});

fs.readFile("abc.txt", "utf-8", (err, data) => {
  try {
    if (err) {
      throw new Error("error in read file");
    } else {
      console.log(data, "readFile data in async");
    }
  } catch (error) {
    console.log(error, "Caught error");
  }
});

const data = fs.readFileSync("abc.txt", "utf-8");
console.log(data, "data in sync");

fs.appendFileSync("dummyFile.txt", new Date().toString());

fs.cpSync("dummyFile.txt", "dummyFile2.txt");

fs.unlink('dummyFile2.txt', (err) => {
  if (err) {
    console.log(err, "error in deleting file");
  } else {
    console.log("file deleted successfully");
  }
}               
)
