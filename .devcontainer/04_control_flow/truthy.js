const userEmail =[]

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email")
}

//falsy values
// false, 0, -0, BigInt 0n,"",null,undefined, NaN

//truthy values
//true, 1, "0", 'false', " ",[], {}, function(){}

if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
//object.keys is used to convet obj to arr

//Nullish coalescing Operator(???): null undefined
let val1;
//val1=5?? 10     -> 5
//val1= null ?? 10   -> 10(null is ignored this time even after staying in front)
//var1 =undefined ?? 15
val1 =null ?? 10 ?? 20
console.log(val1);


// Terniary Operator

//condition ? true :false

const iceTea =100
iceTea <=80 ? console.log("less than 80") : console.log("more than 80");

