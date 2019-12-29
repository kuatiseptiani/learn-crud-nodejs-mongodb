//app.js

const express = require('express');
const bodyParser = require('body-parser');

// import routes for the products
const product = require('./routes/product.route');

//initialize our express app
const app = express();

app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});