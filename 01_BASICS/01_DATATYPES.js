let name = "abhinav"  // string
let age = 21  // integer
let isLoggedIn = true // boolean
let state;


/* 
Following are the primitive data types , which are immutable (cannot be altered after creation) and represent single values

1. number : 2 to power 53
2. bigint : used for very large numbers 
3. string : generally used with ""
4. booleaan: true or false
5. null : standalone value
6. undefined : variable is created but value not assigned
7. symbol : unique , used in Reactjs

*/

console.log(typeof undefined); // output : undefined
console.log(typeof null);      // output : object


// Symbol example

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);    // false , although values are same but its symbol fundamentals , uniqueness



/*
Following are the reference or non-primitive data types, used for dynamic and complex data that do not have a fixed size

1. Array
2. Objects
3. Functions

They have return type as Object and Functions have function-object return type

*/