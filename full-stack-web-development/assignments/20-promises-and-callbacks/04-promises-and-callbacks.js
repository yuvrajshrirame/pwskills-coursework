// Question-04: Arrange in alphabetical order
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.

const books = [
    {
        title: "Concepts of Physics",
        author: "H. C. Verma",
        year: 1999,
    },
    {
        title: "Who are you?",
        author: "George Orwell",
        year: 1949,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
    },
    {
        title: "To Kill a Mocking Bird",
        author: "Harper Lee",
        year: 1960,
    },
];

function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "));
}

function extractTitles(books, callback){
    const titles = books.map((book) => book.title)
    callback(titles);
}

extractTitles(books, logTitles);