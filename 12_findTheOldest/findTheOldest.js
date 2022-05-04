const findTheOldest = function(people) {
    
    let oldest = [];
    for(i in people){

        if(people[i].yearOfDeath == undefined){
            const currYear = new Date();
            oldest.push(currYear.getFullYear()-people[i].yearOfBirth);
        }else{
            oldest.push(people[i].yearOfDeath-people[i].yearOfBirth);
        }
        
    }
    return people[oldest.indexOf(oldest.reduce((a,b)=>Math.max(a,b)))];
    
};

// Do not edit below this line
module.exports = findTheOldest;
