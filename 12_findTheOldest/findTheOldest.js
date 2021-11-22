const findTheOldest = function(people) {


    //if still alive, calculated their age
    const currentYear = (new Date()).getFullYear();
    for (i = 0; i < people.length; i++){
        if (!people[i].hasOwnProperty('yearOfDeath')){
            people[i].yearOfDeath = currentYear;
        }
    }
    
    //using sort
    const sortedPeople = people.sort(function(person1, person2){
        const lastGuy = person1.yearOfDeath - person1.yearOfBirth;
        const nextGuy = person2.yearOfDeath - person2.yearOfBirth;

        if(lastGuy > nextGuy){
            return -1;
        } else {
            return 1;
        }
    });

    return sortedPeople[0];


};

// Do not edit below this line
module.exports = findTheOldest;
