/*
Question-02: You are building a simple login system. Implement the login feature that has two variables: username and password. You should check if the username is "admin" and the password is "12345". If both conditions are true, print "Login successful"; otherwise, print "Invalid credentials".
*/

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful!");
} else {
    console.log("Invalid Credentials!");
}