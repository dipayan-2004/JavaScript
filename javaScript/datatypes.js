// primitive

// String , Boolean , Number , null , undefined , Symbol , BigInt

// non primitive or reference datatypes

// functions, arrays, ..

const id=Symbol(123)
const id_2=Symbol(123)
const d=8923749826562697262659n    // => here n is for BigInt declaration
console.log(id===id_2)  // => false
// though both values are same still they are not same bcz of symbol
console.log(d)
console.log(typeof d)   // => BigInt