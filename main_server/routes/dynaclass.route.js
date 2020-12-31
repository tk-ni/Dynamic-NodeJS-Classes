const express = require('express');
const router = express.Router();
const core = require('./../core/core');
const DynaClass = require('./../models/dynaclass.model');

router.get('/', (req, res) => {
    //Send a transferable class string as a response
    res.status(200).send(core.functions.processClassForTransfer(new DynaClass()));
});

module.exports = router;