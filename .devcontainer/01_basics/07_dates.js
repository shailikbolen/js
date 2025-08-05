 let myDate=new Date()
//  console.log(myDate.toString())
//  console.log(myDate.toDateString())
//  console.log(myDate.toLocaleString())

 console.log(typeof myDate) 
 //Intervie qs: what is the typeof Date in js?

 //syntax to create date
//  let myCreatedDate= new Date(2025,7,5)
//  let myCreatedDate= new Date(2025,7,5,5,47)
let myCreatedDate = new Date("2025-08-05")
//  console.log(myCreatedDate.toLocaleString()) //8/5/2025, 5:47:00 AM

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))
//Date.now()/1000 if we do this we will get value in decimal

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())