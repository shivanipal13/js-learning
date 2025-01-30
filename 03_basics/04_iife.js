//Immediately Invoked Function Expressions (IIFE)

// (function  chai () {
//     console.log("This function runs immediately!");
// })();//named iife because it has name


//✔ Runs immediately without calling it explicitly
//✔ Encapsulates variables, preventing global scope pollution

// (() => {
//     console.log("Arrow function IIFE!");
// })();
// 💡 Use Case:

// Used to execute code immediately without polluting the global scope.
// Helps in module pattern and data encapsulation.

// ( (name) =>{
//     console.log(`db connected to ${name}`)
// })("shivani")//db connected to shivani