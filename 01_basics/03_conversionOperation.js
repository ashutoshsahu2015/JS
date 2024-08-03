let score = "Ashutosh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" -> 33
// "33abc" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1; false -> 0

let isLoggedIn = "Ashutosh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1-> true; 0-> false
// "" -> false
// "Ashutosh" -> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

// ************************************ Operations ********************************

let value = 3
let negValue = -value
//console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " Ashutosh"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2); // 12
console.log(1 + "2"); // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32

console.log(+true); // 1
console.log(+""); // 0

let num1,num2,num3

num1 = num2 = num3 = 2+2 // bad practice of writing code

let gameCounter = 100
++gameCounter;
console.log(gameCounter);