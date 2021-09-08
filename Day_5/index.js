var fs = require("fs");


// Creating New Folder/File
 fs.mkdirSync("first");
fs.writeFileSync("first/new.txt","Khela Hobeeeeeee")


//Reading a file 
const data = fs.readFileSync("first/new.txt", "utf-8")
console.log(data)



//Appending  to a file
fs.appendFileSync("first/new.txt", "2.0");

// Renaming a file
fs.renameSync("first/new.txt", "first/changed.txt");

//Deleting File
fs.unlinkSync("first/changed.txt");

// Deleting Folder 
fs.rmdirSync("first");