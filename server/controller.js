require('dotenv').config();
const express = require ('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

const PORT = 4333;
app.listen(PORT, () => {
    console.log(`listening on port, ${PORT}`);
})