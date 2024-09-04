//const tinderUser = new Object ()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "some@google.com",
    fullname :{
        userfullname :{
            firstname : "some",
            lastname : "user"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

//const obj4 = {obj1,obj2}  // it will add these objects inside a object
const obj4 = Object.assign({},obj1,obj2,obj3) // it will merge the object inside one single object

console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);

const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "b@gmail.com"
    },
    {
        id : 1,
        email : "c@gmail.com"
    },
    {
        id : 1,
        email : "d@gmail.com"
    }
]

console.log(users[1].email)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLogged')); // false


// Object de-structure
const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Ashutosh"
}

//course.courseInstructor

const {courseInstructor : instructor} = course
console.log(instructor);





