var _corsOptionsDelegate = function (request, callback) {
    var corsOptions;
    var whitelist = process.env.ALLOWEDORIGIN.split(',');

    if (whitelist.indexOf(request.header('Origin')) !== -1) {
        corsOptions = { credentials: true, origin: true, allowedHeaders: ['Origin', 'Accept', 'Content-Type', 'Authorization', 'X-Requested-With', 'Set-cookie', 'sentry-trace'] }; // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};

module.exports = { _corsOptionsDelegate };