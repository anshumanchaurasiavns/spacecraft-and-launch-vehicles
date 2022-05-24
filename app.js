let express = require('express');
let bodyParser = require('body-parser');
require('dotenv').config();

let app = express();

let { getServerPort, getNodeEnv } = require("./utils/envFile");
let serverPort = getServerPort();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./server/db/dbConfig')
// const Spacecraft = require('./router/spaceCraft');

// app.use('/spacecraft', Spacecraft);

app.listen(serverPort, function () {
    console.log('Backend Application Running at ', serverPort, '!');
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = getNodeEnv() === 'development' ? err : {};

    res.status(err.status || 500);

    res.send({ "status": 404, "result": err, "message": "Page Not Found or Format the request Body Properly." });
});