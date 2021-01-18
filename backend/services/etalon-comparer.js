const equal = require('fuzzy-equal');

const etalonComparer = (etalon, task) => {
    const mark = equal(etalon, task).similarity;

    return mark;
}

module.exports = etalonComparer;