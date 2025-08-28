//singleton

//object literals
const mySYm=Symbol("key1")

const JsUser={
    name:"Shailik",
    "Full name":"Shailik Bolen",
    [mySYm]:"key",
    age:21,
    location:"Kolkata",
    email:"shailik@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["Full name"]); //we cannot access this with dot syntax
// console.log( JsUser[mySYm]);
//after this if we print the Object mySym will be shown as"Symbol" and not string as we used []brackets in Object define 


JsUser.email="Shailik@google.com"
//Object.freeze(JsUser) //this will prevent from any changes made in the object after this line
JsUser.email="Shailik@micro.com"
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User")
}
JsUser.greeting2=function(){
    console.log(`Hello Js User,${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
