const fibonacci = function(num) {
    if (!['number', 'string'].includes(typeof num)
        || +num === NaN
        || num <= 0
        || Math.floor(+num) !== +num
        ) 
    {
        return 'OOPS';
    }

    num = +num;
    
    if (num === 1 || num === 2) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
