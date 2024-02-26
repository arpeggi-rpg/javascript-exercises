const sumAll = function(firstVal, secondVal) {
    if (typeof firstVal !== "number" || typeof secondVal !== "number") return 'ERROR';
    if (firstVal < 0 || secondVal < 0) return 'ERROR';
    let sum = 0;
    if (firstVal > secondVal){
        for (let i = secondVal; i <= firstVal; i++){
            sum += i;
        }
    }
    for (let i = firstVal; i <= secondVal; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
