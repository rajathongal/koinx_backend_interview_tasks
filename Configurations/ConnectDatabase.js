const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const databaseUrl = process.env.DATABASE_URL || '';

const _connectDatabase = async () => {
    try {
        await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
  
        console.log("MongoDB connected...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = _connectDatabase;