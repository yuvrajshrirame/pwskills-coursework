// Question-08: Get Data from API and Display it on the browser console.
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list of posts, and then display them to the browser console.

const fetchAndConsole = (API) => {
fetch(API)
    .then((response) => {
    if (!response.ok) {
        throw Error('Please Check Your Internet Connection!');
    } else {
        return response.json();
    }
    })
    .then((data) => {
    console.log(data);
    })
    .catch((err) => {
    console.log(`Error occured!`);
    console.log(err);
    });
};

fetchAndConsole('https://jsonplaceholder.typicode.com/posts');