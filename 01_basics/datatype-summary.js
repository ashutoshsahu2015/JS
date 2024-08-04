// Primitive

// 7 types : String, Number, Boolean, null , undefined, Symbol, BigInt

let name = "Ashutosh"
const score = 100
const scoreValue = 100.7

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2132432545435535352535n

// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman","naagraj", "doga"]

let myObj ={
    name : "Ashutosh",
    age : 26
}

const myFunction = function(){
    console.log("Hello World !!!!");
    
}

console.log(typeof name); //string
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof bigNumber); //bigint
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof id); //symbol

console.log(typeof heroes); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function also called as function object

// Stack Memory(Primitive), Heap(Non-Primitive)
let myName = "Ashutosh"
let anotherName = myName
anotherName = "Sahu"

console.log(myName); // Ashutosh
console.log(anotherName); // Sahu

let userOne = {
    email : "ashutoshsahu@gmail.com",
    age : 26
}

let userTwo = userOne

userTwo.email = "ashutosh@gmail.com"

console.log(userOne); //{ email: 'ashutosh@gmail.com', age: 26 }
console.log(userTwo); //{ email: 'ashutosh@gmail.com', age: 26 }


