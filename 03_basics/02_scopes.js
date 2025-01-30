//function clousre


function one(){
    const username="shivani"
    function two(){
        const website="js"
        console.log(username)//shivani function can accesss it parent data 
        //This is called a closure. 
    }
    two()//invoked function two here 
    //console.log(website)//can't access becuase website is block scope)
}

one()//invoked function one here

//console.log(addone(1));
function addone(num){
    return num+1
}//this is function
//can call before intialization


//console.log(addtwo(2))
const addtwo=function(num){
    return num+1
}//this is expression function
//cant invoked before initialization
//not hoisting