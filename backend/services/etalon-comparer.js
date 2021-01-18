const FuzzySet = require('fuzzyset');


const etalonComparer = (etalon, task) => {
    const set = FuzzySet();
    console.log(etalon, task);    
    set.add(etalon);
    const result = set.get(task);
    
    if (result) return result[0][0]
    else return 0;
}

module.exports = etalonComparer;