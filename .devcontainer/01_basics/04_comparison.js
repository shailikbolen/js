console.log("2">1);
console.log("02">1);
//*******************  Avoid *************************/
console.log(null>0) //false
console.log(null>=0) //true
console.log(null==0) //false

// //comparison converts null to a number,trating it as 0 .That's why null >=0 is true and null >0 is false

console.log(undefined ==0) 
//it will return False wrt to any comparison operator
/*********************************************************************** */
//====
console.log("2"==2) //here it is converted to Number from string to check 
console.log("2"===2) //here ir checks the data-type and return false

