const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blockTrackerSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true
    },
    blockNumber: {
        type: Number,
        default: 0,
    }
}, {timestamps: true,  strict: true});

blockTrackerSchema.index({ walletAddress: "text" });

module.exports = model('BlockTracker', blockTrackerSchema);