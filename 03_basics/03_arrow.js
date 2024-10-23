const user = {
    username : "ashutosh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website.`)
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

function chai(){
    let username = "ashutosh"
    console.log(this.username); //undefined
}
chai()

const chaione = function(){
    console.log("This is the function."); 
}
chaione()

const chaiTwo = () =>{
    console.log(this);
}
chaiTwo()

const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

const addThree = (num1,num2) => num1+num2
console.log(addThree(1,2))

const addFour = (num1,num2) => ({username : "ashutosh"})
console.log(addFour(3,6));
