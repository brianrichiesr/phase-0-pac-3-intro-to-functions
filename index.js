// Follow along with the examples here
function doNothing() {
     console.log("Hello!");
}

function sayHelloToGuadalupe () {
    console.log("Hello, Guadalupe!");
}
function sayHelloToLiz () {
    console.log("Hello, Liz!");
}
function sayHelloToSamip () {
    console.log("Hello, Samip!");
}
function doSomething(thing) {
    console.log(thing);
}
function sayHelloTo(firstName) {
    console.log(`Hello ${firstName}`);
}
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}`);
}
function add(x, y) {
    return x + y;
}


doNothing();
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
doSomething("anything");
sayHelloTo(`Guadalupe`);
sayHelloTo(`Jane`);
sayHelloTo(`R2-D2`);
sayHelloTo(1);
say("Hello", "Julio");
console.log(add(1, 2));