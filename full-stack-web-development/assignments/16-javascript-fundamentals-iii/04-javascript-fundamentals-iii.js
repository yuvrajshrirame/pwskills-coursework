// Question-04: Develop a program that accepts an object and a property name, and checks if the object has the specified property.

function checkProperty(obj, property){
    return obj.hasOwnProperty(property);
}

const car = {
    name: "Lamborghini Urus",
    launched: 2017,
    popularity: "High",
    type: "Sports Car"
};

console.log(checkProperty(car, "name")); // True
console.log(checkProperty(car, "speed")); // False