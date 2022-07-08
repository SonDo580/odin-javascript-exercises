const repeatString = function(string, times) {
    if (times < 0) {
        return "ERROR";
    }

    if (string === '') {
        return '';
    }

    let resultString = '';

    for (let i = 0; i < times; i++) {
        resultString += string;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
