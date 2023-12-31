// Question-07: Multiple Requests
// Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.

async function fetchAndCombine(api1, api2) {
try {
    let todoresponse = await fetch(api1);
    let postresponse = await fetch(api2);

    let todoData = await todoresponse.json();
    let postData = await postresponse.json();

    const fetchedResult = {
        todo: todoData,
        post: postData,
    };
    console.log(fetchedResult);
} catch (err) {
    console.log(`Error occured!`);
    console.log(err);
}
}

fetchAndCombine(
'https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/posts/1'
);