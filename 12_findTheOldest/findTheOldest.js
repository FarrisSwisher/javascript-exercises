const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = {};
    const d = new Date();
    for (const person of people){
        if (!("yearOfDeath" in person)) person["yearOfDeath"] = d.getFullYear();
        if (oldestAge < (person.yearOfDeath - person.yearOfBirth)){
            oldestAge = person.yearOfDeath - person.yearOfBirth;
            oldestPerson = person;
        }
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
