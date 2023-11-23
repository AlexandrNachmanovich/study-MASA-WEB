const fileSystem = require("fs");

/* "require()" brings "fs" (file system) module and points 
    to is with fileSystem variable */

/* ASYNCHRONOUS in JS - running in parallel,
   we're not waiting for it */

/* SYNCHRONOUS in JS - not running in parallel,
   we're waiting for it */

// fileSystem.writeFile(); — the best function, as it is asynchronous
fileSystem.writeFileSync("./data/avocado.txt", "Avocado is a great fruit");

// fileSystem.readFile() — the best function, as it is asynchronous

let data01 = fileSystem.readFileSync("./data/avocado.txt", "utf-8");
console.log(data01);
