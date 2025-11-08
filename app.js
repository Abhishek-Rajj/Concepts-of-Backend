// // synchronous file system -------------------------------------------------------
// whatever you write in backticks are called template literal . Ther are used to write multiline strings and to a string with values , ${} is used as a placeholder in javascript
// const sayHi = (name) => {
//   console.log(`Hello there ${name}`); // This will allow you to write nplaceholders , the dollar sign and we use backtick for witing stringd
// };

// const names = require("./practise");
// const print = require("./practise");
// console.log(names);
// print();
// const fs = require("fs");
// const first = fs.readFileSync("path_folder/path_subfolder/test.txt", "utf8");
// const second = fs.readFileSync("path_folder/path_subfolder/write.txt", "utf8");
// console.log(first);
// console.log(second);
// const third = fs.writeFileSync(
//   "path_folder/path_subfolder/write.txt",
//   `hello this is the first write text file,${first},${second}`
// );

// fs.writeFile('example.txt', 'Hello, Abhishek!', (err) => {
// if (err) {
// console.error('Error writing file:', err);
// return;
// }
// console.log('File written successfully!');

// // Asynchronously read the file after writing
// fs.readFile('example.txt', 'utf8', (err, data) => {
// if (err) {
// console.error('Error reading file:', err);
// return;
// }
// console.log('File contents:', data);
// });
// });
//--------------------------------------------aync file sysytem-------------------------------------------
// const { readFile, writeFile } = require("fs");
// readFile("./path_folder/path_subfolder/test.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./path_folder/path_subfolder/write.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./path_folder/path_subfolder/async.txt",
//       `Here is the result : ${first},${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });
//----------------------------------------------HTTPS MODULE ---------------------------------------------
// this create server requires a callback function , since when the request come depends on various things,
// in request means someone is requesting from the server and response is what we are sending back to the server

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("Welcome to my server");
//   res.end();
// });
// server.listen(5000);

//------------------------------------------------------------------------------------
// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("requested evnet ");
//   res.end("Welcome ");
// });
// server.listen(3000, () => {
//   console.log("Server is listning on port 3000");
// });
//------------------------------------------------------------------------------------
// synchronous and aynchronous code together
// here i will put deliberately a  non blocking code in between
// so the summary of the down codeis that when someone request naout the home page it will take a lot of time to respond due to the synchronous blocking code in there  .Unless the for loop end it will not print console .log('About page).
// So we need to write the code asynchronously to avoid such blocking code
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
//   } else if (req.url === "/about") {
//     for (let i = 0; i < 1000; i++) {
//       /// here is the blocking code for checking purpose (Synchronous blocking code )
//       for (let j = 0; j < i; j++) {
//         console.log(`${i},${j}`);
//       }
//     }
    res.end("About Page");
  } else {
    res.end("Page Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
//-------------------------------------------------------------------------------------------
