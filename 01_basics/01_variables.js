const accountId = 144553
let accountEmail = "ashutosh@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState

accountEmail = "ashu@gmail.com"
accountPassword = "212121"
accountCity = "Nagpur"

// object that are const, the object properties can be updated, added or removed

const obj1 = {key1: 2}
obj1.key1 = 5

console.log(obj1)

console.log(accountId);

// don't use var for declearning variables because it has the scope issues

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

//var and let difference
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);
  // Expected output: 2
}
console.log(x);
// Expected output: 2

let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
  // Expected output: 2
}
console.log(x);
// Expected output: 1
