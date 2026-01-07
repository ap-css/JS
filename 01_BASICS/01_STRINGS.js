const name = "abhi"
const age = 21

console.log(name + age + "hello");  // bad way to code , instead use template literals

console.log(`Hello my name is ${name} , my age is ${age}`);


// another way to declare a string

const myName = new String('Abhinav')

console.log(myName.__proto__);   // basic syntax to access various methods 

console.log(myName.length);
console.log(myName.charAt(2));
console.log(myName.indexOf('b'));

const newString = myName.substring(0,4)       // neagtive not allowed
console.log(newString);                       
 
const anotherString = myName.slice(-7,2)      // neagtive allowed 
console.log(anotherString);                   

const user = "   sharma.   "
console.log(user);
console.log(user.trim());    // removes whitespaces 

const url = "https://google/user%20admin.com"
console.log(url.replace('%20','-'));           // replaces value 

const username = new String('Arvind-Kumar-Patil')
console.log(username.split('-'));             // splits string into an array
 









