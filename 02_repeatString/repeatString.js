const repeatString = function(string, times) {
    let resultString = '';

    for (let i = 0; i < times; i++) {
        resultString += string;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
