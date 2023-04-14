const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const transactionsSchema = new Schema({
    blockNumber: {
        type: Number,
        default: 0,
    },
    from: {
        type: String
    },
    to: {
        type: String,
        required: true,
    },
    value: {
        type: String,
    }
}, {timestamps: true, strict: true});

transactionsSchema.index({ to: "text", from: "text" });

module.exports = model('Transactions', transactionsSchema);