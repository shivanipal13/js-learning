const user={
    username:"shivani",
    price:999,

    welcomMessage:function(){//function inside object
        console.log(`${this.username},welcome to website `)//this keyword is used for access the current context
        //this.username refers to the username property of the current object (if it exists).
        //console.log(this)//
    }

}

// user.welcomMessage()//shivani,welcome to website 
// user.username="vini"
// user.welcomMessage()//vini,welcome to website . because we changed context 


// function one(){
//     let username="shivani"
//     console.log(this.username);//this here not aplicable

// }
// //one()

//************ARROW************** */

// const one=function(){
//     let username="xyz"
//     console.log(this.username)//this is not aplicable

// }


// const one=() =>{
//     let username="xyz"
//     console.log(this)//NA
// }

//ARROW FUNCTION
//() => {}
//const ONE=() => {}

    // const addtwo= (num1,num2) =>{
    //     return num1+num2
//this is explicit return 
    // }

   // implicit return //const addtwo=(num1,num2) => num1 +num2
   //const addtwo=(num1,num2) => (num1 +num2)//not need two use return keyword