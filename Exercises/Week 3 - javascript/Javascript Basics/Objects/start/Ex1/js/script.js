var book = {
    title:"disappear",
    author:"Allen Ginsborg",
    year:"1998",
    genre:"thriller",
};

var getBookDescription = (book) => `The book ${book.title} was written by ${book.author} in the year ${book.year}`;
console.log(getBookDescription(book));

var anotherBook = {
    title:"foundation",
    author:"Isaac Asimov",
    year:"1951",
    genre:"horror"
}

console.assert(getBookDescription(anotherBook) === "The book foundation was written by Isaac Asimov in the year 1951");
