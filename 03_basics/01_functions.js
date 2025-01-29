// function myfunction(){
//     //console.log("shivani")
// }

// myfunction//reference only
// myfunction()//shivani

// function addTwoNumbers(num1, num2){
//     result=num1+num2
//     console.log(result)
// }

//addTwoNumbers(1,3)//4
// function addTwoNumbers(num1, num2){
   
//     console.log(num1+num2)
// }
//const result=addTwoNumbers(1,4)//5
//console.log(result)//output :undefined because function doesnot return any value
// function addTwoNumbers(num1, num2) {
//     return num1 + num2; // Return the actual sum
// }
// const result = addTwoNumbers(1, 9); // Stores 10 in result
// console.log(result);

//addTwoNumbers(1,3)
//addTwoNumbers(1,6)

//NOTE: In JavaScript, function overloading (defining multiple functions with the same name but different signatures, like in languages such as C# or Java) is not directly supported.
// // If you define multiple functions with the same name, the last one you define will overwrite the previous ones.

// Using Rest Parameters
// You can also use rest parameters to handle any number of arguments:
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// function addTwoNumbers(...numbers) {
//     let sum = numbers.reduce((acc, num) => acc + num, 0);
//     console.log(sum);
// }

//addTwoNumbers(1, 3);  // Logs: 4
//addTwoNumbers(1, 6);  // Logs: 7
//addTwoNumbers(1, 6, 3);  // Logs: 10


// function loginUserMessage(username){
//     return`${username} just logged in`
// }

// loginUserMessage("shivani");//not print any data

// console.log(loginUserMessage("shivani"))//output:shivani just logged in

//console.log(loginUserMessage())//undefined just logged in
// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please enter a username")
//     }
//     return`${username} just logged in`
// }
//console.log(loginUserMessage())//please enter a username
//undefined just logged in

// function loginUserMessage(username){
//          if(username===undefined){
//              console.log("please enter a username")
//              return//will not execute further code
//          }
//         return`${username} just logged in`
//     }
    //console.log(loginUserMessage())//please enter a username

//     function loginUserMessage(username){
//         if(!username){
//             console.log("please enter a username")
//             return//will not execute further code
//         }
//        return`${username} just logged in`
//    }

//    console.log(loginUserMessage())//please enter a username

//default parameter
//     function loginUserMessage(username="shivani"){
//         if(!username){
//             console.log("please enter a username")
//             return//will not execute further code
//         }
//        return`${username} just logged in`
//    }

//    console.log(loginUserMessage())//shivani just logged in





//****************REST PARAMETER************** */
function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200));//[ 200 ]

//console.log(calculateCartPrice(200,300,500));//[ 200, 300, 500 ]
//console.log(typeof calculateCartPrice())//object   calculateCartPrice function returns an array, and in JavaScript, the typeof operator returns "object" for arrays because arrays are a type of object.


//**********objects************** */



//console.clear()