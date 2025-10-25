const myObject={
    js: "JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by Apple"
}
for (const key in myObject) {//for-in loop not for-of loop
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
const programming=["js","rb","py","java","cpp"]
for(const key in programming){
    //console.log(programming[key]);
    
}

//Map is not iterable 
//cannot run using for-in / for-off

//Arrays - for of,...
//Object- for-in loop only

const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function (item){
//     console.log(item);
    
// })

coding.forEach((item)=>{
    //console.log(item);
    
})


// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    //console.log(item,index,arr);
    
})

const myCoding =[
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})