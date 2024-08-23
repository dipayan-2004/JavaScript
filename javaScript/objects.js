let obj={
    name: "Dipayan",
    age: 22,

}
console.log(obj);
let a=3
let b=4

let functiond= function(){
    console.log(a+b)

}

console.log(typeof obj );
console.log( a );

let info1 ={
    name:"Dipayan Dey",
    age: 20,
}
console.log(info1.name);

let info2 ={
    name:"soumojit dutta",
    age: 20,
}
console.log(info2.name);


info1=info2     // info1 address values will replaced by info2
console.log(info1.name);
console.log(info2.name);

// all reference type datatypes is stored in Heap memory