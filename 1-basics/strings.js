const name = "Akhil"
const repoCount = 50

// console.log(name + repoCount + " Value");


console.log(`hello my name is ${name} and my repo count is ${50}`);



const gameName = new String('Baalarendo-ls')


// console.log(gameName[2]);
// console.log(gameName.__proto__);



//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('B'));


const newString = gameName .substring(0, 5)   
 console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);


const newStringOne = "     Akhil     "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://akhil.com/akhil%20jackson"

console.log(url.replace('%20', '-'))
console.log(url.includes('akhil'))
console.log(url.includes('milk'))

console.log(gameName.split('-'));