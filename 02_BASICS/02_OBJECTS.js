/*
Whenever an object is created using constructor, a singleton is created 
but when object is created using object literals , its not  
*/

// Object literals

const mysym = Symbol("key1")  // declaration of symbol

const User = {
    name: "abhi",
    "full name" : "abhinav patil",
    [mysym] : "mykey1",              // remember if [] not used in key , o/p will come but it will be not used as symbol instead a string
    age : 21,
    location : "gulbarga",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Thursday"]
}

console.log(User.location);      // general way to access but not allowed when you define key in "" 
console.log(User["location"]);   // better way
      
console.log(typeof mysym);
console.log(User[mysym]);  

// to change values

User.name = "avaneesh"

// By using freeze , values cannot be changed

Object.freeze(User)
User.name = "arvind"
console.log(User);


// using functions 

User.greeting = function (){
    console.log("Hello User");
    }

User.greetingtwo = function(){
    console.log(`Hello user, ${this.name}`);
    }

console.log(User.greeting());
console.log(User.greetingtwo());

/*
comment out 32nd line to run above two consoles
*/










