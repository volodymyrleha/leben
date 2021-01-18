const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    etalon: { type: String },
    maxMark: {type: Number},
    description: {type: String, unique: false}
});

module.exports = model('Task', schema);