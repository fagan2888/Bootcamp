var bookOne = {
    title:"disappear",
    author:"Allen Ginsborg",
    year:"1998",
    genre:"thriller",
};

var bookTwo = {
    title:"foundation",
    author:"Isaac Asimov",
    year:"1951",
    genre:"horror"
}
var bookUtils = { };
bookUtils.getFirstPublished = (bookOne,bookTwo) => bookOne.year > bookTwo.year ? bookOne: bookTwo;
var setNewEdition = setNewEdition = (book,year) => book.latestEdition = year; 
var setLanguage = bookUtils.setLanguage = (book,lang) => book.language = lang;
var setTranslation = bookUtils.setTranslation = (book,lang,translator) => book.translation = {translator,language:"lang"};
var setPublisher = bookUtils.setPublisher = (book,name,location) => book.publisher = {name,location};
var isSamePublisher = bookUtils.isSamePublisher = (bookOne,bookTwo) => bookOne.publisher.name === bookTwo.publisher.name && bookTwo.publisher.location === bookOne.publisher.location;


setNewEdition(bookOne,2000);
setLanguage(bookOne,"english");
setTranslation(bookOne,"Han Liu","chinese");
setPublisher(bookOne, "Keter", "Tel Aviv");
setPublisher(bookTwo, "Keter", "Tel Aviv");

//testing my code:)
console.log(bookOne);
console.log(bookUtils);
console.log(bookUtils.isSamePublisher(bookOne,bookTwo));