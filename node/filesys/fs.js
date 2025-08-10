const fs = require("node:fs");

const content = fs.readFileSync("./notes.txt", "utf-8");
fs.writeFileSync("copy.txt",content ,"utf-8");
fs.appendFileSync("copy.txt",content ,"utf-8");
console.log(content);

//create dir
fs.mkdirSync('games') // creates a dir but would throw error on creating sub dir
fs.mkdirSync('games/xyz/s',{recursive:true}) // creates dir and subdir

//remove dir
fs.rmdir('games/xyz/s') // removes dir if empty
fs.rmdirSync("games",{recursive:true}); // creates dir and subdir -- deprecated
fs.rm(path, { recursive: true }) //use this instead


//remove file
fs.unlinkSync('./copy.txt')