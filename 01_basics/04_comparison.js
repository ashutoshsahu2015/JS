// console.log(2 >1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); //true because equality check doesn't convert null to number, but comparison opertaor converts it.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

console.log("2" === 2);