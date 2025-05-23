const sumAll = function(x,y) {
    let result = 0;
    if(x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y) || Number.isNaN(x) || Number.isNaN(y)){
        return "ERROR";
    }
    else if(x > y){
        for(let i = y; i <= x; i++){
            result += i
        }
    }
    else if(x < y){
        for(let i = x; i<=y; i++){
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
