const dbcon = require('../config/db_connection');

const connection = dbcon.getConnection();

connection.connect();

const express = require('express');

const router = express.Router();


// GET

router.get('/', (req, res) => {         // This is for restful API.
    // Retrieve data from the mysql database.
    connection.query('select * from product', (err, records, fields) => {      // This arrow function is here to handling the response from query.
        if(err)
            console.error('Error while fetching data');
        else
            res.send(records);
    });
});

router.get('/:id', (req, res) => {
    // Retrieve data from the mysql database.
    connection.query('select * from product where id=' + req.params.id, (err, records, fields)=>{
        if(err)
            console.error('Error while fetching data');
        else
            res.send(records);
    })
});


// POST

router.post('/', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;


    const sqlQuery = `insert into product values (${id}, '${name}', '${description}', ${price})`;

    connection.query(sqlQuery, (err, result)=>{
        if(err)
            console.error('Error while inserting data', err);
        else
            res.send({insert:'success'});
    })
})

// PUT

router.put('/', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;


    const sqlQuery = `update product set name='${name}', price=${price} where id=${id}`;

    connection.query(sqlQuery, (err, result)=>{
        if(err)
            console.error('Error while updating data', err);
        else
            res.send({update:'success'});
    })
})


// DELETE

router.delete('/', (req, res) => {

    const id = req.body.id;

    const sqlQuery = `delete from product where id=${id}`;

    connection.query(sqlQuery, (err, result)=>{
        if(err)
            console.error('Error while deleting data', err);
        else
            res.send({delete:'success'});
    })
})










module.exports = router;