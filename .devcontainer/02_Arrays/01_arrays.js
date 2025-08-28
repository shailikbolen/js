//array

myArr=[0,1,2,3,4,5]
//console.log(myArr)

//const newArr= new Array(1,2,3,4,5)
//console.log(newArr);


//Arrays methods
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr =myArr.join()
// console.log(newArr)
// console.log(typeof newArr)

//slice & splice [Interview qs -basic diff]
console.log("A",myArr);
const arr1= myArr.slice(1,3)
console.log(arr1);

console.log("B",myArr);
const arr2= myArr.splice(1,3)
console.log(arr2);

console.log("C",myArr)

// So from here we get to know the :slice-does not includes the range
//                                  -it does not make any particular change in the original arr
//                                 splice- includes the range also
//                                       -it divides the original arr into two peices which includes the range and the leftover elements