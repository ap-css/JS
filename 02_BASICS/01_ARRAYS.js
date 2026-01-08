// JS Arrays are resizable and contains mix data types and they create shallow copies i.e., copies share the same references

const myArr = [0,1,2,3,4]
const myHeroes = ["superman","batman"]

// another way to declare array

const myArr2 = new Array(10,20,30)
console.log(myArr2);

// array methods

myArr.push(5)   // inserts element at last
myArr.pop()     // removes element from last
console.log(myArr);

myArr.unshift(7)  // adds element at 0th and shifts adjacent
myArr.shift()     // vice versa
console.log(myArr);

console.log(myArr.includes(8));   // boolean o/p
console.log(myArr.indexOf(8));    // if ele doesn't exist then always it returns -1


// array to string 

const newArr = myArr.join()
console.log(newArr);

// slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)   // destination excluded
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)  // destination included 
console.log("C",myArr);
console.log(myn2); 



/*
basically when slice is used the original array stays same
but when splice is used the original array is manipulated and the slice portion is removed from it
*/

// bad way to merge

const india = ["dhoni","virat"]
const england = ["stokes","cook"]

india.push(england)         // the second array is treated as single ele in first array when pushed
console.log(india);             
console.log(india[2][0]);


// good way

const all = india.concat(england)
console.log(all);

// best way (using spread which allows multiple arrays unlike concat)

const newall = [...india, ...england]
console.log(newall);

// when mulitple nested arrays (using flat)

const another_array = [1,2,3,[4,5],6,[7,8,[1,5]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

// converting anything like object,strings etc to array (using from)

console.log(Array.isArray("abhi"));
console.log(Array.from("abhi"));

console.log(Array.from({name: "abhi"})); // it will return an empty array bcz it cannot decide on own whether to provide an array of key or value

// for multiple arrays,values etc (using of)

let score1 = 100
let score2 = 150
let score3 = 210

console.log(Array.of(score1,score2,score3));












