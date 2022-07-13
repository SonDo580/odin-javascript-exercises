const palindromes = function (string) {
    // Remove all punctuations and spaces
    let alphabetString = string.replace(/[^A-Za-z]+/g, '');

    let reversedString = alphabetString.split('').reverse().join('');

    if (reversedString.toLowerCase() !== alphabetString.toLowerCase()) {
        return false;
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
