// STACK : PRIMITIVE DATA TYPES
// HEAP  : NON-PRIMITIVE DATA TYPES

let myName = "Abhinav"
let anotherName = myName
anotherName = "Abhi"
console.log(myName);
console.log(anotherName);

/*
IN STACK WE GET ONLY COPY OF THE ORIGINAL AND ITS VALUE REMAINS UNAFFECTED
*/

let userOne = {
    email : "abcd@gmail.com",
    age : 21
}

let userTwo = userOne
userTwo.email = "xyz@gmail.com"

console.log(userOne);
console.log(userTwo);

/*
IN HEAP WE GET REFERENCE AND THE CHANGES ARE REFLECTED IN ORIGINAL 
*/



