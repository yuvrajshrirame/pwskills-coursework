// Question-03: Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

const add = (a, b) => {
    var sum;
    console.log(sum); // Undefined
    sum = a + b;
    return sum;
};

console.log(add(10,20)); // 30