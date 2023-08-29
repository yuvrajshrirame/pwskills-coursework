// Question-02: Imagine you work for an e-commerce company. Your task is to create a function that takes the prices of all the products in a customer's cart as input parameters. The function should then calculate and return the total sum of all the product prices. This will help the company easily calculate the total cost of the customer's shopping cart.

function calculateTotalCartValue (){
    let totalSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];
    }
    console.log(`The Total Cart Value is ${totalSum}`);
    return totalSum;
}

calculateTotalCartValue(125, 20, 30);

// OP: The Total Cart Value is 175