const add = function(num1,num2) {
    return num1+num2;
	
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(numarray) {
	return numarray.reduce((partSum,val)=>partSum+val,0);
  
};

const multiply = function(numarray) {
  return numarray.reduce((multiply,a)=>multiply*a);
};

const power = function(num,power) {
  let total = 1;
  for(let i = 0; i<power; i++){
    total*=num;
  }
  return total;
};

const factorial = function(num) {
  let result = num;

  if(num ===0 || num ===1){
    return 1;
  }

  while(num>1){
    num--;
    result*=num;
  }

  return result;
  
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
