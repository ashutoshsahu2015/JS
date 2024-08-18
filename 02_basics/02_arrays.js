const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros) // It will add array as single element
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros) // it will add each array element as single element in resulted array
console.log(all_heros);

// new way of concating is spreading
const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ashutosh")); // false
console.log(Array.from("Ashutosh")); // ['A','s','h','u','t','o','s','h']
console.log(Array.from({name:"Ashutosh"})); //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));