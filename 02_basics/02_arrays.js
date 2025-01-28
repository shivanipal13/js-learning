const marvel_heros=["thor","Ironman",1,"true"]

const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)//push appends new element to array and resturn new length
//console.log(marvel_heros)//[ 'thor', 'Ironman', 1, 'true', [ 'superman', 'flash', 'batman' ] ]

const all_heros=marvel_heros.concat(dc_heros)////combine two or more arrays . this methos returns 
//console.log(all_heros)//[
//     'thor',     'Ironman',
//     1,          'true',
//     'superman', 'flash',
//     'batman'
//   ]
//console.log()

//important//spread operator
const all_new_heros=[...marvel_heros,...dc_heros]//Use Case	Example	Output
// Cloning	[...arr]	Copy of the array
// Merging	[...arr1, ...arr2]	Combined array
// Adding elements	[1, ...arr, 5]	Elements added in place
// String to Array	[..."hello"]	["h", "e", "l", "l", "o"]
// Removing Duplicates	[...new Set(arr)]	Unique elements
// Function Arguments	sum(...nums)	Function call with elements


//console.log(all_new_heros)//[
//     'thor',     'Ironman',
//     1,          'true',
//     'superman', 'flash',
//     'batman'
//   ]

const another_array=[1,2,3,[3,5],[6,7,8],[3,4,[9,8]]]//nested aaray

//const real_another_array=another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//console.log(real_another_array)//[
//     1, 2, 3, 3, 5,
//     6, 7, 8, 3, 4,
//     9, 8
//   ]
const real_another_array_spreadusing=[...another_array]//The spread operator (...) only spreads the top-level elements of another_array, not the nested arrays.
//This means real_another_array_spreadusing is a shallow copy of another_array.
console.log(real_another_array_spreadusing)//[ 1, 2, 3, [ 3, 5 ], [ 6, 7, 8 ], [ 3, 4, [ 9, 8 ] ] ]
//console.clear()

// Shallow Copy in Arrays and Objects
// When you create a shallow copy, the nested objects or arrays are not cloned; they are only referenced, meaning changes made to the nested objects in the copied structure will also affect the original.

// Limitations of Shallow Copy:
// If your object/array contains nested structures (like arrays within arrays or objects within objects), those structures are not deep copied. Any change to the inner structures will reflect in both the original and the copy.


// const originalArray = [1, 2, [3, 4]];
// const shallowCopy = [...originalArray];

// console.log(shallowCopy);  // Output: [1, 2, [3, 4]]
// shallowCopy[2][0] = 99;   // Modify the inner array

// console.log(originalArray); // Output: [1, 2, [99, 4]]
// console.log(shallowCopy);   // Output: [1, 2, [99, 4]]

// How to Make a Deep Copy (Full Copy)
// A deep copy duplicates the entire object or array, including all nested structures. This means any modification in the deep copy will not affect the original.

//const deepCopy = structuredClone(originalObject);

//HOW TO CONVERT OTHER OBJECT INTO ARRAY
//Convert a String to an Array
console.log(Array.isArray("SHIVANI"))//false
console.log(Array.from("shivani"))//[
//     's', 'h', 'i',
//     'v', 'a', 'n',
//     'i'
//   ]

// Array.from()
// What it does:
// Array.from() creates an array from an iterable or array-like object (such as a string, NodeList, Set, Map, or arguments object).
console.log(Array.from({name:"shivani"}))//[]


// let set = new Set([1, 2, 3, 4]);
// let arr = Array.from(set);//Convert a Set to an Array
// console.log(arr); // [1, 2, 3, 4]

//Convert a Map's Keys or Values to an Array
// let map = new Map([[1, "one"], [2, "two"], [3, "three"]]);
// let keysArray = Array.from(map.keys());
// console.log(keysArray); // [1, 2, 3]

// let valuesArray = Array.from(map.values());
// console.log(valuesArray); // ["one", "two", "three"]

//Convert arguments Object to an Array
// function demo() {
//     let arr = Array.from(arguments);
//     console.log(arr);
// }

// demo(10, 20, 30); // [10, 20, 30]

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]
