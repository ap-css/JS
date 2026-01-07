let value = 3
let negvalue = -value
console.log(negvalue);  

console.log("1" + 2);       // 12
console.log(1 + "2");       // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

/*
if string is in first , rest all are considered as string 
but if string is in last , coversion is done first
*/

let x = 3
const y = x++
console.log(`x:${x}, y:${y}`);    

let a = 3
const b = ++a
console.log(`a:${a}, b:${b}`);

/*

if we use postfix, with operator after operand (x++), increment operator increments and returns value before incrementing
Pehele value do, phir badho

if we use prefix, with operator before operand (++x), increment operator increments and returns value after incrementing
Pehele badho, phir value do

*/



