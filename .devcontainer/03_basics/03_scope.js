let a=100
const b=200
var c=300
// {} this curly braces means scope
if (true) {
    let a=10
    const b=20
    var c=30
    console.log("Inner: ",a);//inner scope
    
}
console.log(a); 100//outer scope
// console.log(b); 200
//console.log(c); 30

//global block nes scope all are diff
//

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);