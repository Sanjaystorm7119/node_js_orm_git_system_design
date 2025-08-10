const fs = require('fs')
console.log("start")

//Async - blocking operation
const content = fs.readFile("notes.txt","utf-8",function(error,content){
if (error){
    console.log(content)
}
else{
    console.log(content)
}
})
console.log("end")
