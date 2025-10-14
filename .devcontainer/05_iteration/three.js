const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const str="Hello world"
for (const char of str) {
    console.log(char);
    
}
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

const myObject={
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,':-',value);//TypeError: myObject is not iterable
    
}