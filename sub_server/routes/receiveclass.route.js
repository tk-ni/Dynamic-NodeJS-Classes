const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const core = require('./../core/core');

router.get('/', (req, res) => {
    fetch(core.env.mainServerAddress + '/dynaclass', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        res.json().then(data => {

            //Assign the new constructor to cls
            let cls = core.functions.processReceivedClass(data);

            //Make a new object with the received constructor
            let newInstance = new cls();

            //Console logging the new object
            console.log(newInstance);
            /*
                DynaClass {
                    foo: 'foo',
                    bar: 'bar',
                    getFoo: [Function],
                    setFoo: [Function],
                    getBar: [Function],
                    setBar: [Function]
                } 
            */

            //Method testing
            newInstance.setFoo('New Foo!');
            console.log(newInstance.getFoo()); // New Foo!

        })
    }).catch(e => {
        res.status(500).send(e);
    })
});

module.exports = router;