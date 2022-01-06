const repeatString = function(str,num) {
    
    if(num<0){
        return "ERROR";
    }else{

        let strbuild = '';

        for(let i = 0; i<num;i++){
            strbuild+=str;
        } 
        return strbuild;
    }
        
};

// Do not edit below this line
module.exports = repeatString;
