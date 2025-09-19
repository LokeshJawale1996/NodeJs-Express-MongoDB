//#Files
//Blocking - Synchronous way

//Synchrnous way of reading and writting files are also called as blocking code
//in synchronous code the execution of code is blocked until the task is completed
//code is executed line by line in synchronous code
//in blocking code if one task takes time to complete then the next task has to wat for it to complete

const fs = require("fs");
const textIn = fs.readFileSync("../txt/input.txt", "utf-8");
console.log(textIn);

//To write content to file
const now = new Date();
const formattedDate = now.toLocaleString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

//previously before ES6 we need to use + opertaor now we can use ES6 template Literal
const textOut = `This is what we know about the avacado: ${textIn} \nCreated on ${formattedDate}`;
fs.writeFileSync("../txt/output.txt", textOut);
console.log("File written!");
