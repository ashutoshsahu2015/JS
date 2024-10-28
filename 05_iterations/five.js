const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function(val){
    console.log(val);
    
})

coding.forEach((val)=>{
    console.log(val);
    
})

function printme(val){
    console.log(val);   
}

coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName : "javascript",
        languageFieldName : "js"
    },
    {
        languageName: "python",
        languageFieldName: "py"
    },
    {
        languageName: "C++",
        languageFieldName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFieldName);
})