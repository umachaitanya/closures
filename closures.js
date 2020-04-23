//Once the function is executed, it goes out of scope - closures are used, when we want hold the values even after fn is executed

let greeting = (function(){
    let message = "Good Morning!";
    let getMessage = function(){
        return message;
    };
    return {
        getMessage :getMessage
    };
})();

console.log(greeting.getMessage()); 

