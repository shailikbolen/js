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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memories :2 type -Stack(Primitive),Heap(Non-primitive)
let myUtube="Sunnydotcom"
let anothename =myUtube
anothename="Chai aur code"
console.log(anothename)
console.log(myUtube)
//after changing the anothername to "chai aur code" the previous one is still having the old name

let user={
    email:"user@gmail.com",
    upi:"okaxis.com"
}

let user2= user

user2.email = "netflix@gmail.com"
console.log(user.email);
console.log(user2.email)
//They are going to heap so both of them are getting changed