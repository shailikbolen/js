// function calculateCartPrice(...num1){// without dots it will not take multiple inputs
//     return num1
// }
// console.log(calculateCartPrice(200,300,500));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"Hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}