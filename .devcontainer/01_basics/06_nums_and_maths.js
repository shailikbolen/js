const score=400
console.log(score)

const balance =new Number(100)
console.log(balance)

const Decimal= 23.8988
console.log(Decimal.toPrecision(3))

const hundreds =100000
console.log(hundreds.toLocaleString('en-IN'))
//if we don't write en-IN it will give assign to International Number system


//++++++++++++++++++++++  Maths ++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(-4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,6,8))
// console.log(Math.max(4,3,6,8))

console.log(Math.floor((Math.random()*10)) +1) // to return gretaer than 1

// Math.random gives value between 0 and 1
 const min =10
 const max =20
 // now to get in a range of 10(min) and 20(max)
 console.log(Math.floor(Math.random() *(max-min+1))+min)
