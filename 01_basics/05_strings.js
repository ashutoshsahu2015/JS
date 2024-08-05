const name = "Ashutosh"
const repoCount = 20

// console.log(name + repoCount); Not a correct way to concate the string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Clean code

const gameName = new String('Ashutosh-ashu-com') //Another way of defining the string 

//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,-2) // difference from substring is that slice accept negative value
console.log(anotherString);

const newStringOne = "     ashu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashutosh.com/ashutosh%20sahu"

console.log(url.replace('%20','-'));
console.log(url.includes('ashu'));
console.log(gameName.split('-'));





