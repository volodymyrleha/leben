const FuzzySet = require('fuzzyset');


const etalonComparer = (etalon, task) => {
    const set = FuzzySet();
    console.log(etalon, task);    
    set.add(etalon);
    const result = set.get(task);
    //return result[0][0];
    return Math.random();
}

module.exports = etalonComparer;