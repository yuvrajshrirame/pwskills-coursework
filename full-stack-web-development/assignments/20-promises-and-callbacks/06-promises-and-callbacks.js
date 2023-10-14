// Question-06: Fetch Results Asynchronously
// Write a function that asynchronously fetches data from an API [https://jsonplaceholder.typicode.com/todos/1] and logs the result to the console.

const fetchData = (API) => {
fetch(API)
    .then((response) => {
    return response.json();
    })
    .then((result) => {
    console.log(result);
    });
};

fetchData('https://jsonplaceholder.typicode.com/todos/1');