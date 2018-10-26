const express = require ('express');
const bodyParser = require('body-parser');
const app = express ();
const port = 6969;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log('dad? ', port);
})