//Dependencies & Requires
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Core Require
const core = require('./core/core');

//Server Initiation
const app = express();

//Middleware
app.use(bodyParser.json({ extended: true }));
app.use(cors());

//Listen
app.listen(core.env.PORT, () => {
    console.log('Sub server listening on', core.env.PORT);
})