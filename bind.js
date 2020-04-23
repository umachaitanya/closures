//call and apply are used to change the this value / context
//want to make a copy of the function and then change value of this - bind

let person1 = {
    name : "uma",
    getName : function(){
        return this.name;
    }
};
let person2 ={
    name :" chaitanya"
};
let copy = person1.getName.bind(person2);
console.log(copy());