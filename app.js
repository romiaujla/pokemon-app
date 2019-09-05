require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const POKEDEX = require('./pokedex.json');

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

function validateBearerToken(req, res, next){
    const authToken = req.get('Authorization');
    const apiToken = process.env.API_TOKEN;
    if(!authToken || authToken.split(' ')[1] !== apiToken){
        return res
            .status(401)
            .json({error: `Unauthorized Request`});
    }
    next();
}

function handleGetTypes(req, res){
    res.json(VALIDTYPES);
}


function handleGetPokemon(req, res){
    const {name , type } = req.query;
    let response = POKEDEX.pokemon;

    response = response.filter((pokemon) => {
        if(pokemon.name.toLowerCase().includes(name))
            return pokemon;
    });
    
    response = response.filter((pokemon) => {
        if(pokemon.type.includes(type))
            return pokemon;
    })

    res.json(response);
}

app.use(validateBearerToken);

app.get('/types', handleGetTypes);

app.get('/pokemon', handleGetPokemon);

module.exports = app;