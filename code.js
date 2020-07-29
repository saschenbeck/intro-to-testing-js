// helloWorld function 
var helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input){
    return "Hello, " + input + "!";
}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    if (typeof (input) === "boolean" || input == "") {
        return false;
    }else{
        return input % 2 == 0;
    }
}

function isVowel(input) {

}