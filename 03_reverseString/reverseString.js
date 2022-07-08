const reverseString = function(string) {
    const arrayChar = string.split('');
    const reverseArrayChar = [];

    for (let i = string.length - 1; i >= 0; i--) {
        reverseArrayChar.push(arrayChar[i]);
    }

    return reverseArrayChar.join('');
};

// Do not edit below this line
module.exports = reverseString;
