//String Interpolation 

// let Name = "shivani";
// let Surname = "pal";

//console.log(`Hello, my name is ${Name} and my surname is ${Surname}`);
//all methods of strings
//console.log("hello")

//check string start with s and end with i
// function checkString(str1) {
//     // Convert the string to lowercase
//     let str = str1.toLowerCase();

//     // Check if the string starts with 's' and ends with 'i'
//     if (str.startsWith('s') && str.endsWith('i')) {
//         return true;
//     }
//     return false;
// }

// let str1="shivani"
// let result=checkString(str1);
// console.log(result); // true


// const readline = require('readline');

// // Create an interface for user input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function checkString(str1) {
//     // Convert the string to lowercase
//     let str = str1.toLowerCase();

//     // Check if the string starts with 's' and ends with 'i'
//     if (str.startsWith('s') && str.endsWith('i')) {
//         return true;
//     }
//     return false;
// }

// // Ask the user for input
// rl.question("Enter a string to check if it starts with 's' and ends with 'i': ", function (str1) {
//     let result = checkString(str1);
//     console.log(`Result: ${result}`); // Outputs true or false
//     rl.close(); // Close the input stream
// });

const gameName= new String('shivani')
// console.log(gameName[1]);//h
// console.log(gameName[0]);//s

// console.log(gameName.length)//7

// console.log(gameName.toUpperCase())//SHIVANI
// console.log(gameName.charAt(2))//i
// console.log(gameName.indexOf('h'))//1

//substring
// const newstring=gameName.substring(3,7)
// console.log(newstring)//vani

// const newvalue=gameName.replace("n", "pal")
// console.log(newvalue)//shivapali
//console.log(gameName.includes("h"))//true

//split

// console.log(gameName.split(''))//[
//     's', 'h', 'i',
//     'v', 'a', 'n',
//     'i'
//   ]

