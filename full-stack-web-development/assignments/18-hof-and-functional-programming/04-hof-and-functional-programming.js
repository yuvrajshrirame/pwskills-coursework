// Question-04: Filtering and Capitalizing: Books Published After 2010 with Author Names. Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

const books = [
    {
        title: "Harry Potter",
        author: "J. K. Rowling",
        year: 2010,
    },
    {
        title: "Geetanjali",
        author: "Rabindra Nath Tagore",
        year: 1997,
    },
    {
        title: "Crime and Punishment",
        author: "Dostoevsky",
        year: 1993,
    }
];

const filteredBooks = books.filter((book) => {
    return book.year >= 2010;
})

const result = filteredBooks.map((book) => {
    return {
        ...book,
        author: book.author.toUpperCase(),
    };
});

console.log(result);