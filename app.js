const express = require('express');
const morgan = require('morgan');

console.log(process.env.API_TOKEN);

const app = express();
app.use(morgan('dev'));

const VALIDTYPES = [
    `Bug`, 
    `Dark`, 
    `Dragon`, 
    `Electric`, 
    `Fairy`, 
    `Fighting`, 
    `Fire`, 
    `Flying`, 
    `Ghost`, 
    `Grass`, 
    `Ground`, 
    `Ice`, 
    `Normal`, 
    `Poison`, 
    `Psychic`, 
    `Rock`, 
    `Steel`, 
    `Water`
];

function handleGetTypes(req, res){
    res.json(VALIDTYPES);
}

app.get('/types', handleGetTypes);

module.exports = app;