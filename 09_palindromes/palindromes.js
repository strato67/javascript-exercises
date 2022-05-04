const palindromes = function (sentence) {
    const initSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g,'').toLowerCase().split("");

    const reverse = initSentence.slice().reverse();
    
    return initSentence.every((v,i)=>v===reverse[i]);


};

// Do not edit below this line
module.exports = palindromes;
