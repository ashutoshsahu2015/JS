const myObject = {
    'js': "JavaScript",
    'py': "Python",
    "cpp" : "C++"
}

for (const key in myObject) {
    console.log(key);
    console.log(myObject[key])
}

const programming = ["java","cpp","python","javascript"]

for (const key in programming) {
   console.log(programming[key]);
   
}

const map = new Map()
map.set('IN','India')
map.set('FR','France')

for (const key in map) {
   console.log(key);
   
} // Not working