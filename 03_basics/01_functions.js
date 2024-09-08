function sayMyName(){
    console.log("Ashutosh");
}

sayMyName()

function addTwoNumbers(number1,number2){
    
    //console.log(number1 + number2);
    
    //let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,5)
console.log("Result :",result);

function loginUserMessage(userName="Sam"){
    if(!userName){
        console.log("Please enter a username");
        return
        
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("Ashutosh"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username : "Ashutosh",
    coursePrice : 299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.coursePrice}`);
}

handleObject(user)
handleObject({
    username : "sam",
    coursePrice : 199
})

const myNewArray = [200,40,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,12,23,45]));