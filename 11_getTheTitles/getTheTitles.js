const getTheTitles = function(bookList) {

    returnArr = [];
    for(book in bookList){
        returnArr.push(bookList[book].title);
    }
    return returnArr;

};

// Do not edit below this line
module.exports = getTheTitles;
