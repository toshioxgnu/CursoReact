const { response, request } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req = request, res = response) => {

    const errors = validationResult(req);
    console.log(errors)

    const {
        name,
        email,
        password
    } = req.body;

   if( !errors.isEmpty() ){
    return res.status(400).json({
        ok: false,
        errors: errors.mapped()
    })
   }

    res.status(201).json({
        ok:true,
        msg: 'registro',
        name,
        email,
        password
    });
}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body;
    const errors = validationResult(req);

    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
       
    }

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}

module.exports =  {
    crearUsuario,
    loginUsuario,
    revalidarToken
}