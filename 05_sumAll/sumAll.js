const sumAll = function(num1,num2) {
    let sum = 0;
    let start, finish;

    if(num2>num1&&num1>0&&num2>0&&Number.isInteger(num1)&&
    Number.isInteger(num2)){
        finish = num2;
        start = num1;

    }else if(num2<num1&&num1>0&&num2>0&&Number.isInteger(num1)&&
    Number.isInteger(num2)){
        finish = num1;
        start = num2;
    }else{
        return "ERROR";
    }
     
    for(let i = finish; i>=start;i--){
        sum+=i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
