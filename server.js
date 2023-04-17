// Imports
const express = require('express');
const cors = require('cors');
const { _corsOptionsDelegate } = require('./Utilities/CorsDelgate');
const _connectDatabase = require('./Configurations/ConnectDatabase');
require('dotenv').config();

// Constants and ENV variables
const server = express();
const PORT = process.env.PORT || 5001;

// Connect To Database
(async () => {
    await _connectDatabase()
})();

server.use(cors(_corsOptionsDelegate));
server.use(express.json());

// Health Check Route
server.get("/health", (request, response) => {

    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
    };

    try {
        response.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        response.status(503).send();
    }

});

server.use(require('./Routes/index'));
server.listen(PORT, async () => {
    console.log(`App running on Port ${PORT}`);
});

module.exports = server;