console.log("2" > 1);  
// here the string is automatically converted to number, which is strictly not allowed in typescript to compare diff data types

console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null >= 0);   // true

/*
Comparisons (> < >= <=) convert null to to number, treating it as 0
*/


console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

/*
so for code efficiency avoid these comparisons
*/

console.log("2" === 2); // known as strict check , compares both values and data types

