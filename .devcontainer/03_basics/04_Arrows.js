const user={
    username:"Hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username="Sunny"
// user.welcomeMessage()

console.log(this); // without above three lines this will give empty value

// function chai(){
//     let username="Shailik" //this will result in undefined
//     console.log(this.username);
    
// }
// chai()

const chai= () => {
    let username="Shailik" //this will result in undefined
    console.log(this);
    
}
//chai()

// const AddTwo=(num1,num2) =>{
//     return num1+num2
// }

//const AddTwo=(num1,num2) =>  (num1+num2)  // implicit arrow function w/o curly braces
const AddTwo=(num1,num2) =>  ({username:"Hitesh"})  
console.log(AddTwo(3,4));



const myArr=[2,5,3,7,8]

//myArr.forEach(() =>{})