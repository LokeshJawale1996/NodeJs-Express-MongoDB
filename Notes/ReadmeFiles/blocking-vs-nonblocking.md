# Blocking vs Non-Blocking in Node.js

Node.js is single-threaded and event-driven, so understanding **blocking** vs **non-blocking** code is very important.

---

## 📊 Comparison Table

| Aspect          | Blocking (Synchronous)                                    | Non-Blocking (Asynchronous)                                      |
| --------------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| **Definition**  | Code execution is **blocked** until the task is complete. | Code execution is **not blocked**; tasks continue in background. |
| **Execution**   | Executes **line by line**, waiting for each task.         | Executes **line by line**, but doesn’t wait for long tasks.      |
| **Thread**      | Each task blocks the single thread.                       | Single-threaded, but multiple tasks can share it.                |
| **Performance** | Slower for I/O-heavy tasks (e.g., servers).               | Faster and scalable for concurrent tasks.                        |
| **Also Called** | Blocking code / Synchronous code.                         | Non-blocking code / Asynchronous code.                           |
| **Benefit**     | Easier to write and understand.                           | Handles multiple users efficiently, better performance.          |

---

## 📝 Blocking Example (Synchronous)

```js
// Blocking (Synchronous)
const fs = require("fs");

// Writing synchronously
fs.writeFileSync("example.txt", "Hello, Blocking code!");

// Reading synchronously
const data = fs.readFileSync("example.txt", "utf-8");
console.log("File content:", data);

console.log("This will only run AFTER the file is read.");
```

## 📝Non-Blocking Example (Asynchronous)

```js
// Non-Blocking (Asynchronous)
const fs = require("fs");

// Writing asynchronously
fs.writeFile("example.txt", "Hello, Non-Blocking code!", (err) => {
  if (err) throw err;
  console.log("File written successfully!");

  // Reading asynchronously
  fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});

console.log("This runs WITHOUT waiting for file reading/writing.");
```
