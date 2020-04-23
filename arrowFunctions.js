let add = (a,b) => {return a+b};
let output = add(1,2);
console.log(output);
//this keyword in regular Function
let greetings = {
    name : "Uma",
    regularFn : function(){
        return "Hi" + " " + this.name
     },
     arrowFn : () => { return "Hi " + this.name}
}
console.log(greetings.regularFn());

console.log(greetings.arrowFn());