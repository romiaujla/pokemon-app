const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((_, res) => {
    res.send(`Hello world`);
});

module.exports = app;