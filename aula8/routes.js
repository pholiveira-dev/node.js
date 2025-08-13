const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.Formulario);
route.get('/contato', contatoController.homeContato);

module.exports = route;