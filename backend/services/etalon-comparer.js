const FuzzySet = require('fuzzyset');


const etalonComparer = (etalon, task) => {
    const set = FuzzySet();
    set.add(etalon);
    const result = set.get(task);
    console.log(result);
    return result[0][0];
}

module.exports = etalonComparer;