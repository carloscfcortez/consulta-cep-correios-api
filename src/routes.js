const express = require('express');
const routes = express.Router();
const ConsultaController = require('./controllers/ConsultaController')

routes.get("/", ConsultaController.index)


module.exports = routes;