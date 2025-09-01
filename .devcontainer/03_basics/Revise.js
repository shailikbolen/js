const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"; //string
const cities = data.split(",");//covverting to arr
cities;
console.log(cities.length) // 6
console.log(cities[0])//1st item
console.log(cities[cities.length-1])//last item

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger

//coverting string to number
const myStr="123"
const num=Number(myStr)
console.log(typeof num);
console.log(num);
//Number to string : String(num)

//greetings
const name="Harry"
const greetings= `Hello, ${name}`
console.log(greetings);

const one="Hello, "
const two="How are you?"
const joined=`${one}${two}`
console.log(joined);

//concatenation using + operator
const greeting3="Hello"
const intro="World!"
console.log(greeting3+","+intro);

const song="High On You"
const score=9
const MaxScore=10
const Opinion =`My favourite song is ${song} and I listen to it ${score/MaxScore *100}% of my free time.`
console.log(Opinion);


//Multi -line string
const newLine=`Hey, BOb 
How r doing today?`
console.log(newLine);

//Giving quotes in Strings
const GoodQuotes='This "Winning Speech" song is one of fav.'
console.log(GoodQuotes);
const Quoting=`My school name is "SAIE"`
console.log(Quoting);

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const Arr=["Mango","Apple","Banana","Lemon","Orange"]
const SLicing=Arr.slice(2)
console.log(SLicing);
console.log(Arr);

const Splicing=Arr.splice(2,5)
console.log(Splicing);
console.log(Arr);

// floor and ceil
// const decimal=23.4567
// console.log(decimal.floor(2));

let myNumber="74"
// myNumber+=3
// console.log(myNumber);

const changetoNum=Number(myNumber)+3
console.log(changetoNum);
