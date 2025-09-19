const fs = require("fs");
//Non-blocking - Asynchronous way

//single threaded non-blocking code
//everyone is accessing the same thread
//if one task takes time to complete then the next task can be executed without waiting for the previous task to complete
//in non-blocking code the execution of code is not blocked until the task is completed
//code is executed line by line in non-blocking code
//non-blocking code is also called as asynchronous code
//benefits of non-blockinng code is that it is faster than blocking code
//multiple users can access the same tread at the same time due to its non-blocking nature

fs.readFile("../txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error!");
  console.log("data1", data1);
  fs.readFile(`../txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log("data2", data2);
    fs.readFile("../txt/append.txt", "utf-8", (err, data3) => {
      console.log("data3", data3);
      fs.writeFile(
        "../txt/final.txt",
        `${data1}\n${data2}\n${data3}`,
        "utf-8",
        (err) => {
          if (err) return console.log("Error!");
          console.log("Your file has been written successfully!");
        }
      );
    });
  });
});
console.log("Will read file!");
