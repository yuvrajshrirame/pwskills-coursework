// Question-03: Write a program that takes an object as input and returns the number of properties it has.

const car = {
    name: "Lamborghini Urus",
    launched: 2017,
    popularity: "High",
    type: "Sports Car"
};
  
function countProperties (obj) {
    return `Total Properties: ${Object.keys(obj).length}`;
};
  
console.log(countProperties(car));