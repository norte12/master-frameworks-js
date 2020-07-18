'use strict'

// Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParse = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var article_routes = require('./routes/article');

// Middelewores
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

// CORS


// Añadir prefijos a rutas / cargar routes
app.use('/api', article_routes);

// Exportar modulo (fichero actual)
module.exports = app;