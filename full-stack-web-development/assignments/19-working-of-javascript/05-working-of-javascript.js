// Question-05: Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

function display(){
    console.log(x); // Reference Error
    let x = "hello";
    console.log(x); // hello
}

display();