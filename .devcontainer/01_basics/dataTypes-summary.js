// #Primitive

//7 types: String, Number, Boolean, null, Undefined, Symbol, Bigint

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp =null
let userEmail; //this is undefined

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId); //false

const BigNumber= 21934238574954390030n
console.log(typeof BigNumber) //we have to put n at last to make it BigInt 

// reference type(Non-primitive): Array,Objects,Functions

const heroes=["shaktiman","Iron-man","Captain-America"] //Array
let myObj={
    Name:"Shailik",
    age:21

}

const myFunction=function(){ //Storing function in const
console.log("Hello World")
}

console.log(myObj)