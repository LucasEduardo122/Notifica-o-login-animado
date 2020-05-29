const express = require('express');
const Register = require('./controllers/controllerRegister');

const Routes = express.Router();

Routes.post('/register', Register.cadaster);
Routes.post('/login', Register.login);

module.exports = Routes;