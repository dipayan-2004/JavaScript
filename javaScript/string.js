// type one of declaring string

let str2="fuck you"
console.log(str2.indexOf('o'));
console.log(str2.length);
console.log(str2.toUpperCase());




// type two of declaring string

let str= new String("hellow world")
console.log(str.indexOf('o'));
console.log(str.length);
console.log(str.toUpperCase());

// substring property used to break the origin string 
console.log(str.substring(0,4));  // => hell

// slice property is used to print the part of the string like loop( from either side)
console.log(str.slice(0,4));  // => hell
console.log(str.slice(11,5));  // => dlrow wo



// there are lots of other methods/ string operations also...



// trim() method used to remove extra spaces
let str3="    dipayan dey   "
console.log(str3.trim())  // => it will just print 'dipayan dey'

let str4 = "dipayan@gmail.com"
console.log(str4.replace('gmail','mail'));  // =>dipayan@mail.com

// replace('which to replace','with whom')



// for finding anything 
console.log(str4.includes('dip'));   // => true

// splitting the string and making an  array
let arr=str.split(' ')
console.log(arr);  // => [ 'hellow', 'world' ]

let len= 34
let brd=54

console.log(`the length of the rectangle is ${len} and the breadth is ${brd} `);
