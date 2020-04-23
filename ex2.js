function setUpCounter(value){
    return function counter(){
       return value++;
    }
}
let counter1 = new setUpCounter(0);
console.log(counter1());
let counter100 = new setUpCounter(100);
console.log(counter100());