const express = require('express');

const app = express();

const productAPI = require('./controllers/product.controller');

app.use('/api/products', productAPI);

app.listen(8080);

console.log('Server up and running on port 8080');