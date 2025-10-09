const temperature=41

if(temperature <50){
    console.log('less than 50');
}
else{
    console.log('greater than 50');
}
console.log('execute');


const score =200
if(score>100){
    let power ="fly"
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);  this line will give an error as power is defined inside the scope i.e {}

const balance=1000
//if(balance>500) console.log("test");
//if(balance>500) console.log("test"), console.log("test 2"); dont't write code with ","

if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else{
    console.log("greater than 750");
}

const userLoggedIn =true
const debitCard =true
const loggedInGoogle=false
const loggedInEmail=true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
if(loggedInGoogle || loggedInEmail){
    console.log("User logged in");
}