const express = require('express');
require('dotenv').config();
const cors = require('cors');


// crear el servidor de express
const app = express();

// Base de datos
const { dbConnection } = require('./database/config');
dbConnection();



// Directorio publico
app.use( express.static('public'));

// cors
app.use( cors() );

// lectura y parseo del body
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// TODO CRUD: Eventos



// Escuchar peticiones 
app.listen( process.env.PORT , () => {
    console.log(`server running in port ${process.env.PORT}`)
} );
