// Question-04: Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

function scope(){
    // Code mentioned below gives an error because it is accessed before it is initialized. Make sure you comment it down in order to run it error free
        console.log(A);
        console.log(B);
        console.log(C);

    let A = 10;
    var B = 20;
    const C = 30;

    console.log(A);
    console.log(B);
    console.log(C);
}

scope();