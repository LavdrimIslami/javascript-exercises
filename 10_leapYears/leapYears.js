const leapYears = function(x) {
    if(x % 400 == 0)
        {return true}
    else if(x % 4 == 0 && x % 100 !=0)
        {return true}
    else{return false}
};
//Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400

// Do not edit below this line
module.exports = leapYears;
