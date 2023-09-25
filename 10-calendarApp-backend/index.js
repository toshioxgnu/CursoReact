const express = require('express');
require('dotenv').config();

// crear el servidor de express
const app = express();

// Directorio publico
app.use( express.static('public'));

// Routes
app.use('/api/auth', require('./routes/auth'));

// TODO CRUD: Eventos



// Escuchar peticiones 
app.listen( process.env.PORT , () => {
    console.log(`server running in port ${process.env.PORT}`)
} );
