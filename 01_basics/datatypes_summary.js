//1.primitive//value type
//7 types: string , number, boolean, null, symbol, undefined,BigInt

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)//false symbol generates unique values

//2.Non primitive //reference type
//Array ,Objects, functions
//