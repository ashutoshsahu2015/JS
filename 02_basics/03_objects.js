// Object Literals

const mySym = Symbol ("key1") // symbol object

const JsUser = {
    name : "Ashutosh",
    "full name" : "Ashutosh Sahu",
    [mySym] : "mykey1",
    location : "Bangalore",
    age : 26,
    email : "ashutosh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Thursday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "ashutosh@chatgpt.com"
// Object.freeze(JsUser) // Freeze the object

JsUser.email = "ashutosh@microsoft.com"
console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello JS user");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


