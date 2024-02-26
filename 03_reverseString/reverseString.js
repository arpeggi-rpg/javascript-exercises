const reverseString = function(string) {
    let stringArr = string.split('');
    let reverseArr = Array();
    for (let i = 0; i < stringArr.length; i++) {
        reverseArr.splice(0, 0, stringArr.at(i));
    }
    return reverseArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
