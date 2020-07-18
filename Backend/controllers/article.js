'use strict'

var controller = {

    datosCurso: (req, res) => {
        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Victor Robles WEB',
            url: 'victorroblesweb.es',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        // Recoger parametros por post

        // Validar datos

        // Crear el objeto a guardar

        // Asignar valores

        // Guardar el articulo

        // Devolver una respuesta
        return res.status(200).send({
            message: 'Soy la acción SAVE de mi controlador de articulos'
        });
    }

}; // end controller

module.exports = controller;