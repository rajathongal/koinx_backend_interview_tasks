const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ethPricesSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    usd: {
        type: String,
        required: true,
    }
}, {timestamps: true, strict: true});

module.exports = model('ETHPrices', ethPricesSchema);