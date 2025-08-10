const fs = require('fs')
console.log("start")

//sync - blocking operation
const content = fs.readFileSync("./notes.txt","utf-8")
console.log(content)
console.log("end")
