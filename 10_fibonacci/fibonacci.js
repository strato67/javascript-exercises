const fibonacci = function(num) {
    if(num<0) return "OOPS";

    num--;
    let firstnum = 1, secondnum=0, temp;

    while(num>=0){
        temp = firstnum;
        firstnum=firstnum+secondnum;
        secondnum=temp;
        num--;
    }
    return secondnum;

};

// Do not edit below this line
module.exports = fibonacci;
