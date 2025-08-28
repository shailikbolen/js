//const tinderUser=new Object()
const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"SomeAgmail.com",
    fullname:{
        userName:{
            firstname:"Shailik",
            lastname:"Bolen"
        }
    }
}
//console.log(regularUser.fullname.userName.firstname);


const obj1={1:"A",2:"B"}
const obj2={3:"A",4:"B"}
const obj4={5:"A",6:"B"}

// const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)
//{} this is given so that all the objects are stored in the empty object if we don't give it the combined object will be stored in the first object inside the assign function.

const obj3={...obj1,...obj2,...obj4}
//console.log(obj3);

//console.log(obj3==obj1);
//here it will return False as we didnt stored the combined objects in obj1 but if we remove {} it will return False


const users=[
    {
        id:1,
        email:"@gmail.com"
    },
        {
        id:1,
        email:"@gmail.com"
    },
        {
        id:1,
        email:"@gmail.com"
    },
        {
        id:1,
        email:"@gmail.com"
    },
        {
        id:1,
        email:"@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//to check if this is present in the Object

