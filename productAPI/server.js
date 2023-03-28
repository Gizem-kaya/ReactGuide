const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const productAPI = require('./controllers/product.controller');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use('/api/products', productAPI);       // Must be the last thing that you'll call.


app.listen(8080);

console.log('Server up and running on port 8080');