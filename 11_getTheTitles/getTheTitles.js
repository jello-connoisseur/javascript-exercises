const getTheTitles = function(books) {
    let bookArray = [];
    books.map(function(book){
        bookArray.push(book.title);
    })
    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
