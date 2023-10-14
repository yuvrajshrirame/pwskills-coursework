// Question-02: String Manipulation
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: ” along with the manipulated string or the new string to the console.

const manipulateString = (str, callback) => {
    return callback(str.toUpperCase());
};

const logString = (capitalizeString) => {
    console.log(`The manipulated string is : ${capitalizeString}`);
};

manipulateString('text', logString);