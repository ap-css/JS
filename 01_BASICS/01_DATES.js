let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// another way to declare date

let mycreatedDate = new Date(2026,0,5)
console.log(mycreatedDate.toDateString());

// mm-dd-yy format

let newdate = new Date("01-10-2026")
console.log(newdate.toLocaleString());

// timestamps (useful in quiz,polls etc)

let myTimeStamp = Date.now()
console.log(myTimeStamp);         // provides o/p of long millisecond from jan 1970 till current 

// to get value from 1 jan 1970 to declared date

console.log(newdate.getTime());  // useful to compare in projects like hotel booking

console.log(Math.floor(Date.now()/1000));  // milliseconds to seconds


// widely used 

console.log(newdate.toLocaleString('default',{
    weekday: "long",
    minute: "2-digit"
}))





