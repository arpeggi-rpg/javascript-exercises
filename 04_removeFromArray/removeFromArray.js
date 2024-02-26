const removeFromArray = function(arr, ...args) {
    let newArr = Array();
    for (i of arr) {
        if (args.indexOf(i) == -1) newArr.push(i);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
