let intro = function(name,profession){
    console.log( "My name is "+name+ " I am a "+profession);
    console.log(this);
}

intro.apply(undefined,["uma", "trainer"]); //use apply() when similar arguments are passed as an array
intro.call(undefined,"uma", "actor"); //use call() when diff types of args are passed