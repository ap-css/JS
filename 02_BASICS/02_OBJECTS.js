/*
Whenever an object is created using constructor, a singleton is created 
but when object is created using object literals , its not  
*/

// Object literals

const User = {
    name: "abhi",
    "full name" : "abhinav patil",
    age : 21,
    location : "gulbarga",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Thursday"]
}

console.log(User.location);      // general way to access but not allowed when you define key in "" 
console.log(User["location"]);   // better way



