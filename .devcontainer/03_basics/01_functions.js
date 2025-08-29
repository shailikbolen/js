// function sayMyName(){
//     console.log("H");
//     console.log("E");
//     console.log("L");
//     console.log("L");
//     console.log("O");
    
// }
// sayMyName()

// function AddTwoNumber(number1,number2){//parameters
//     console.log(number1+number2);
    
// }
AddTwoNumber(3,"4") // 34 //Passing value in function : arguments 
AddTwoNumber(3,4) //7
AddTwoNumber(3,null) //3

function AddTwoNumber(number1,number2){//parameters
    // let result= number1+number2
    // return result
    return number1+number2
    
}
// const result=AddTwoNumber(3,5) //8
// console.log("Result: ",result); //undefined 

const result=AddTwoNumber(3,5)
//console.log("Result: ",result); //8 this is bcaz we r returning the result this time

function loginUserMessage(username){ //(username="sam") this means that default val will always be sam if user doesn't input anything and also in this case it will avoid if cond
    if(username ==undefined){ //if(!username)
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}
//loginUserMessage("Sunny") this will not give any output as we told it to return but not to print
console.log(loginUserMessage("Sunny")); //now it show o/p
console.log(loginUserMessage(""));
console.log(loginUserMessage());//undefined 