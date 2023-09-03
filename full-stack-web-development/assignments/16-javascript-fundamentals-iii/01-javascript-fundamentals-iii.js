// Question-01: Create an object representing a car with properties like "make," "model," and "year." Write a function to display all the properties of the car.

const car = {
    make: "Lamborghini",
    model: "Urus",
    year: 2017
};

function display(car){
    for(const feature in car){
        console.log(`${feature} : ${car[feature]}`);
    }
}

display(car);