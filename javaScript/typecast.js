//typeof is a keyword 
//null is a keyword that  represent standalone value.
let a=33;
console.log(typeof(a))
//this will show "number"
//so the type is number


let b="33"
console.log(typeof(b))
//this will show "string"
//so the type is string.

b=Number(b)
//this will conver the datatype from "string" to "number"
console.log(typeof(b))


let c=Number("33an")
console.log(typeof(c));
console.log(c);
//now the value it show in the terminal is 'NaN', this is a keyword.


let d=Number(null)
console.log(typeof(d));
console.log(d);
//now the value it show in the terminal is 0


let e=Number(undefined)
console.log(typeof(e));
console.log(e);


//convert to int
//"33"=> 33
// "33abs"=> NaN
//"null" => 0
//"boolean"=> 0 or 1
//"undefined"=> NaN



// convert to boolean
// 33 => 1
// 1 => true ,  0 => false
// "hitesh" => true
