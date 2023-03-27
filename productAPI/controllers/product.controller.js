const dbcon = require('../config/db_connection');

const connection = dbcon.getConnection();

connection.connect();

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {         // This is for restful API.
    connection.query('select * from product', (err, records, fields) => {      // This arrow function is here to handling the response from query.
        if(err)
            console.error('Error while fetching data');
        else
            res.send(records);
    });
});

module.exports = router;