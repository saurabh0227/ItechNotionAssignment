const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Home = require('./home/model');
const Office = require('./office/model');
const homeRoute = require('./home/route');
const officeRoute = require('./office/route');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(homeRoute);
app.use(officeRoute);


let globalConnectionStack = [];

let dbs = {
    'home': {
        uri: 'mongodb://localhost:27027/home-dev'
    },
    'office': {
        uri: 'mongodb://localhost:27027/office-dev'
    },
    'default': {
        uri: 'mongodb://localhost:27027/home-dev'
    }
};

app.use((req, res, next) => {
    let host = req.headers.host;

    if (typeof dbs[req.headers.host] === 'undefined') dbs[req.headers.host] = dbs.default.uri;

    let connection_uri = dbs[req.headers.host].uri;
    if (typeof globalConnectionStack[host] === 'home') {
        globalConnectionStack[host] = {};
        globalConnectionStack[host].db = mongoose.createConnection(connection_uri);
        globalConnectionStack[host].user = Home;

    }
    else {
        globalConnectionStack[host] = {};
        globalConnectionStack[host].db = mongoose.createConnection(connection_uri);
        globalConnectionStack[host].user = Office;
    }
    return next();
});


app.listen(3000, () => {
    console.log(`Application running at PORT 3000`);
});