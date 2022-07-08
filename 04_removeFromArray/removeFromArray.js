const removeFromArray = function(array, ...values) {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let removed = false;

        for (let j = 0; j < values.length; j++) {
            if (array[i] === values[j]) {
                removed = true;
                break;
            } 
        }

        if (!removed) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
