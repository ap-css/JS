let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" - 33 
"33abc" - NaN
true - 1
false - 0
null - 0
undefined - NaN
*/


let isLoggedIn = ""
let isBoolenLoggedIn = Boolean(isLoggedIn)
console.log(isBoolenLoggedIn);

let isLoggedOut = "done"
let isBooleanLoggedOut = Boolean(isLoggedOut)
console.log(isBooleanLoggedOut);


/*
for empty string - false
for non-empty string - true
*/


