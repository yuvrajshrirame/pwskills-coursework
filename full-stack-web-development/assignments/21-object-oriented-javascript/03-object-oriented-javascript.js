// Question-03: Create a Temperature class in JavaScript that manages both Celsius and Fahrenheit temperatures with getters and setters for each unit, allowing for automatic conversion between the two scales. The class should have an initial state of 0°C and 2°F, and it should validate input values for temperature updates, ensuring they are numeric. When setting the temperature in either Celsius or Fahrenheit, the class should correctly update the corresponding value in the other scale. For example, setting the Celsius temperature to 25°C should automatically update the Fahrenheit temperature to 77°F. Your challenge is to implement the Temperature class following the provided code structure and requirements while ensuring that it handles conversions and input validation accurately.

class Temperature {
    constructor() {
        this._celsius = 0;
        this._fahrenheit = 32;
    }

    // Getter for Celsius temperature
    get getCelsius() {
        return this._celsius;
    }

    // Getter for Fahrenheit temperature
    get getFahrenheit() {
        return this._fahrenheit;
    }

    // Setter for Celsius temperature
    set setCelsius(celsius) {
        if (typeof celsius === "number") {
            this._celsius = celsius;
            this._fahrenheit = (celsius * 9) / 5 + 32;
        } else {
            console.error("Temperature must be a numeric value.");
        }
    }

    // Setter for Fahrenheit temperature
    set setFahrenheit(fahrenheit) {
        if (typeof fahrenheit === "number") {
            this._fahrenheit = fahrenheit;
            this._celsius = ((fahrenheit - 32) * 5) / 9;
        } else {
            console.error("Temperature must be a numeric value.");
        }
    }
}

const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`); // Initial Celsius: 0°C
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`); // Initial Fahrenheit: 32°F

temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`); // Celsius: 25°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); // Fahrenheit: 77°F

temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`); // Celsius: 20°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); // Fahrenheit: 68°F