/* 
    event routes
    host + /api/events
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
  

const router = Router();

// require login 
// Obtener eventos 
router.get('/',validarJWT ,getEventos );

// crear nuevo evento
router.post('/',validarJWT ,crearEvento );


// Actualizar Evento
router.put('/:id',validarJWT ,actualizarEvento );

// Actualizar Evento
router.delete('/:id',validarJWT ,eliminarEvento  );


module.exports = router;