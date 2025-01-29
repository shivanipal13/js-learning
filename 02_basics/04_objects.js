//singlton objects

const  objexample=new Object()

objexample.id="1234"

//console.log(objexample)//{ id: '1234' }

const regularUser={
    email:"shivani@gmail.com",
    fullname:{ 
        userfullname:{//nested 
            //object
            firstname:"shivani",
            lastname:"pal"
        }  
            
    }
}
//how access nested objects and property
console.log(regularUser.fullname)//{ userfullname: { firstname: 'shivani', lastname: 'pal' } }
console.log(regularUser.fullname.userfullname.firstname)//shivani

//how to join /combine objects 

const obj1={1:'2',2:'3'}

const obj2={3:'4',4:'6'}
// const obj3={obj1, obj2}
// console.log(obj3)//{ obj1: { '1': '2', '2': '3' }, obj2: { '3': '4', '4': '6' } }
const obj3=Object.assign(obj1, obj2)
console.log(obj3)//{ '1': '2', '2': '3', '3': '4', '4': '6' }

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true


//spread 
const obj4={...obj1, ...obj2}
console.log(obj4)//{ '1': '2', '2': '3', '3': '4', '4': '6' }



//Object destructuring
//Object destructuring in JavaScript is a shorthand syntax for extracting values from objects and assigning them to variables. It allows you to break down an object into individual variables in a more concise way.
//Object destructuring is a powerful feature in JavaScript that helps make code more concise and easier to work with

//Basic Example of Object Destructuring
//console.clear()