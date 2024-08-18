//Array Decleration

const myArr = [0,1,2,3,4,5,true,"ashutosh"]
const myHeros = ["shaktiman","nagraaj"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]); // 0

// Array Methods

myArr.push(6)
myArr.push(7)
extractedElement = myArr.pop()

console.log(myArr)
console.log(extractedElement); //7

myArr.unshift(9) // It will put the element at the 0th index.
myArr.shift() // It will remove the element at the 0th index.

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(3)); //3

const newArr = myArr.join() // It will separate the array element by parameter passed. If not given it will separate using the element using comma.
console.log(myArr);
console.log(newArr);

// Slice and Splice
console.log("A :" , myArr);

const myn1 = myArr.slice(1,3) // It does not manipulat the original array.

console.log(myn1);
console.log("B : ",myArr);

const myn2 = myArr.splice(1,3) // Splice will remove the element from original array.
console.log("C :",myArr);
console.log(myn2);