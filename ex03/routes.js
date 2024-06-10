const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

function meumid(req, ans, next) {
    console.log('midle');
    next();
}


//home
route.get('/', meumid , homeController.paginainicial);
route.post('/', homeController.tratapost)

//contato
route.get('/contato', contatoController.pginicial)



module.exports = route;