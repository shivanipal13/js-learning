//In js have 2 type objects
//singleton
//object.create//constructor

//object literals
//how to create objects
//const objectname={}//it has key and values key can we anythings number string , boolean

const jsUser={
    name:"shivani",
    age:18,
    location:"mumbai",
    email:"shivani@google.com",
    isLoggedIn:false,
    lastLoginDay:["monday","saturday"]}

//how to access objects
//console.log(jsUser.age)//18
//console.log(jsUser["email"])//shivani@google.com

//how to use symbol in objects
//declared symbol
const sym=Symbol("key1")//return new unique sysmbol
//now we are adding symbol into object's key

const jsUser1={
    name:"shivani",
    age:18,
    location:"mumbai",
    email:"shivani@google.com",
    isLoggedIn:false,
    lastLoginDay:["monday","saturday"],
    [sym]:"this is symbol value"
}

//how to access symbol using objects
//console.log(jsUser1["key1"])//this is symbol value
//lets check type of key1 
// Accessing the symbol key value
console.log(jsUser1[sym]); // Output: this is symbol value

// Check the type of the symbol key
console.log(typeof sym); // Output: symbol

//how to change object key value
jsUser.email="shiva@gmail.com"

console.log(jsUser.email)//shiva@gmail.com

//Object.freeze(jsUser)//connot change
jsUser.age=20//cantnot change
console.log(jsUser.age)//18 //cause can't change

//How to add function in ojects

jsUser.greeting=function(){
    console.log("Hello js user")
}
console.log(jsUser.greeting())//Hello js user

//how to use an object key to reference a function.
jsUser.greetingtwo=function(){
    console.log("Hello js user " +this.name)
}
console.log(jsUser.greetingtwo())//Hello js user shivani

//using string interpolation

jsUser.greeting3=function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting3())//Hello js user, shivani

//console.clear()//clears the terminal or the browser's console,