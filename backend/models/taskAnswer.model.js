const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    taskId: { type: Types.ObjectId, ref: 'Task', required: true },
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    solution: { type: String, required: true },
    percentage: {type: Number, required: true},
    mark: { type: Number, required: true }
}, { timestamps: true });

module.exports = model('TaskAnswer', schema);