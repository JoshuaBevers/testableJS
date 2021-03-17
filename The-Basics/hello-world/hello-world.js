function helloWorld() {
    const hello = "Hello, World!"; // defines a string variable named hello.
    return hello; // returns the string.
}

function main(){
    let hello = "Placeholder until we call our 'helloWorld' function!";
    hello = helloWorld();
    return hello;
}

module.exports = main;

