//Dependencies & Requires
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Core Require
const core = require('./core/core');

//Routes Require
const receiveclassRouter = require('./routes/receiveclass.route');

//Server Initiation
const app = express();

//Middleware
app.use(bodyParser.json({ extended: true }));
app.use(cors());

//Routes
app.use('/receiveclass', receiveclassRouter);

//Listen
app.listen(core.env.PORT, () => {
    console.log('Sub server listening on', core.env.PORT);
})