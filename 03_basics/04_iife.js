// Immediately Invoked Function Expressions(IIFE)
(function chai(){
    //Named IIFE
    console.log(`DB Connected`);  
})();

((name)=>{
    //Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("ashutosh");