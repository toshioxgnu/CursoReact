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
router.get('/' ,getEventos );

router.use( validarJWT);
// crear nuevo evento
router.post('/' ,crearEvento );


// Actualizar Evento
router.put('/:id' ,actualizarEvento );

// Actualizar Evento
router.delete('/:id' ,eliminarEvento  );


module.exports = router;