const express = require('express');
const colors = require('colors');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello world from Express and NodeJS.</h1>');
    res.end();
})

app.listen(3000, function () {
    console.log('Server on port 3000'.red);
})