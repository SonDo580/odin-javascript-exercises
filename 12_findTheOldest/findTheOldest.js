const findTheOldest = function (people) {
    let oldest = people[0];

    for (let person of people) {
        if (findAge(person) > findAge(oldest)) {
            oldest = person;
        }
    }

    return oldest;
};

function findAge(person) {
    if (!('yearOfDeath' in person)) {
        
        return new Date().getFullYear() - person.yearOfBirth;
    }

    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
