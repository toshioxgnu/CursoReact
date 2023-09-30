/* 
    event routes
    host + /api/events
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
  
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

// require login 
// Obtener eventos 
router.get('/' ,getEventos );

router.use( validarJWT);
// crear nuevo evento
router.post('/' ,[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalizacion es obligatoria').custom( isDate ),
    validarCampos
],crearEvento );


// Actualizar Evento
router.put('/:id' ,[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalizacion es obligatoria').custom( isDate ),
    validarCampos
],actualizarEvento );

// Actualizar Evento
router.delete('/:id' ,eliminarEvento  );


module.exports = router;