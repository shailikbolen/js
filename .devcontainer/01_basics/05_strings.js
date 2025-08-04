const name="SHailik"
const age =21

//console.log(name+age+"Value")

console.log(`Hello my name is ${name} and my age is ${age}`)
// This [ ` ] is know as backtick which is present left to key 1

const gameName = new String ('Shailik-Bolen-CSE')
//  console.log(gameName[0])
//  console.log(gameName.__proto__)

//  console.log(gameName.length)
//  console.log(gameName.toUpperCase())
 console.log(gameName.charAt(2)) 
 console.log(gameName.indexOf('i')) 
 console.log(gameName.substring(0,4))
 
 const newString =gameName.slice(-8,4)
 console.log(newString) 

 const string ="   Sunny   "
 console.log(string)
 console.log(string.trim()) // This will cut off the extra spaces

 const url="https://hitesh.com%20choudhary"
 console.log(url.replace('%20','-'))

 //split
 console.log(gameName.split('-'))

const slicing =["Html","CSS","JS","Nodejs","React js","DSA"]
console.log(slicing.slice(0,-2)) // the last two index is getting excluded

//Negative index is from last
//positive inedx from start
    //0, 1, 2, 3, 4
//eg ["a","b","c","d"]
    //-4, -3 , -2, -1
