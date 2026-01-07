// normal way to write number

const score = 200
console.log(score);

// another way to specify that we are using number

const balance = new Number(100)
console.log(balance);

// various methods 

console.log(balance.toString());
console.log(balance.toFixed(2));  // useful for precisions in e-comm website


// based on concept that preference is given to before decimal based on value entered in toPrecision() 

const othernumber = 123.8996
console.log(othernumber.toPrecision(3));  // 124
console.log(othernumber.toPrecision(4));  // 123.9

const salary = 1000000
console.log(salary.toLocaleString('en-IN'));  // used to separate big num in commas for vizualization

// MATH methods 

console.log(Math);             // in console very useful to view all methods
console.log(Math.abs(-4));     // -ve to +ve
console.log(Math.round(4.4));  // used in mathematical round-off
console.log(Math.ceil(4.3));   // selects upper limit
console.log(Math.floor(4.8));  // selects lower limit
console.log(Math.min(1,2,3));  // returns min value
console.log(Math.max(4,7,8));  // returns max value

console.log(Math.random());                   // used to generate random value b/w 0 & 1
console.log((Math.random()*10) + 1);          // shifting one place left so that 1-10 can be generated
console.log(Math.floor(Math.random()*10)+1);  // but floor can make values like 0.1 to 0 , so to get min 1 as start , 1 is added

// general concept with help of max min 

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);




















