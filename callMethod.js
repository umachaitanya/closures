let p1 = {name : "uma", age : 23};
let p2 = {name : "chaitanya", age : 22};

let message = function (){
    return "Hi "+ this.name;
}

let customMessage = function (msg){
    return this.name;
}
console.log(message.call(p1));
console.log(message.call(p2));

console.log(customMessage.call(p2), "Hello!!! ");