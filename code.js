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
    if (typeof input === "number" || typeof input === "boolean") {
        return false
    } else {
        switch (input) {
            case "a" || "e" || "i" || "o" || "u":
                return true;
                break;
            case "A" || "E" || "I" || "O" || "U":
                return true;
                break;
            default:
                return false
        }
    }
}

function add(x,y) {
    if(typeof x === "string" || typeof y === "string"){
        var numX = parseFloat(x), numY = parseFloat(y);
        if ( isNaN(numX)|| isNaN(numY)){
            return NaN;
        }else{
            return numX + numY;
        }
    }else {
        return x + y;
    }
}