const coding= ["java","cpp","python","ruby","c++"]

const values=coding.forEach( (item) => {
    console.log(item);
    
})
console.log(values);

const nums=[1,2,3,4,5,6,7,8,9,10]
const newNums= nums.filter( (num) => num>4) //correct syntax
//const newNums= nums.filter( (num) => {num>4}) //incorrect syntax -> curly braces indicates object/scope so if curly braces are used we need  return keyword .... return num >4
//console.log(newNums);


newNums =[] // const is removed as it is already initialised
nums.forEach( (num) =>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);
