class Book {
    constructor(title, author,isReadingBook) {
        this.title = title;
        this.author = author;
        this.isReadingBook = isReadingBook;
    }
}
let book1 = new Book('Hobbit', ' J.R.R. Tolkien', true);
let book2 = new Book('Harry potter', 'J. K. Rowling', false);
let book3 = new Book('Narnia', 'C. S. Lewis', false);
let books = [book1, book2, book3];
function logBook(book) {
    return `The ${book.title} by ${book.author}`;
}
function logBooksNotReading(books) {
    for (let index = 0; index < books.length; index++) {
        if (books[index].isReadingBook === false) {
            console.log(logBook(books[index]));
        }
    }
}

function test_equal(actual, expected, msg) {
    if (Array.isArray(expected)) {
        for (var i = 0; i < expected.length; i++) {
            test_equal(actual[i], expected[i], "item in index " + i);
        }
    } else if (typeof expected === "object") {
        for (prop in expected) {
            test_equal(actual[prop], expected[prop]);
        }
    } else {
        if (actual !== expected) {
            console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
        }
    }
}
