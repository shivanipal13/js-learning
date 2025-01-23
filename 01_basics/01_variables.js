const accountId=123
let accountEmail="shivani@gmail.com" 
var accountPass="123#"
accountCity="Mumbai"

// accountId=1234   //not aalowed to change the value of const//TypeError: Assignment to constant variable.
//let accountEmail="qw@gmail.com" //Identifier 'accountEmail' has already been declared
accountEmail="qw@gmail.com" //let reassignment is allowed redeclaration is not
accountPass="12323"
accountCity="Delhi"
let accountState;//undefined

console.log(accountEmail);

// console.table([accountId,accountEmail,accountPass,accountCity]);

/*
prefer not to use var
because of issue in block scope and functional scope

*/


