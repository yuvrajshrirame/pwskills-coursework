// Question-06: Create a function that takes a string as input and returns the string reversed using string manipulation techniques.

const STR = "HEYY";

function reverseString(input){
    return input.split('').reverse().join("");
}

let reversedString = reverseString(STR);
console.log(reversedString);