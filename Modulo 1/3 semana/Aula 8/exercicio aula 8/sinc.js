const fs = require('fs');
const util = require('util');
// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);

// Can't use `await` outside of an 
// async function so you need to chain with then()
readFile('texto.txt').then(data => {
  console.log(data.toString());
})
var fs = require("fs");

fs.readFile("texto.txt", function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});

