var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];
var displayBooks  = (library) => {
      var displayBooks = library.filter((book => book.readingStatus === true));
      console.log(displayBooks);
      printBookDescription(displayBooks);
}
var printBookDescription = (displayBooks) =>
{
    console.log(`the books that can be read by:`);
    displayBooks.forEach((book)=> console.log(`${book.title} , ${book.author} and reading status is ${book.readingStatus}`));
}

displayBooks(library);