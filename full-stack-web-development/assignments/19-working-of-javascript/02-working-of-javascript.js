// Question-02: Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

let a = 10;
let b = 10;
console.log(multiplyNumbers(a, b));

function multiplyNumbers(a,b){
  return a * b;
};