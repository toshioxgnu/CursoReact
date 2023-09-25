const { response, request } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");


const crearUsuario = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email: req.body.email });

    console.log(usuario);

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo",
      });
    }

    usuario = new Usuario(req.body);

    // encrypt password
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    const token = await generarJWT( usuario.id, usuario.name )

    res.status(201).json({
      ok: true,
      msg: "registro",
      uid: usuario.id,
      email: usuario.email,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error hable con el administrador",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  
    const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario y passwd incorrectos",
      });
    }

    // confirmar los passwords
    const validPassword = bcrypt.compareSync( password , usuario.password  );

    if( !validPassword ){
        return res.status(400).json({
            ok:false,
            msg: 'password incorrecta'
        })
    }

    const token = await generarJWT( usuario.id, usuario.name )

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });


  } catch (error) {


    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error hable con el administrador",
    });
  }
};

const revalidarToken = async (req, res = response) => {

    const { uid, name } = req;

    // generar un nuevo JWT y retornarlo en esta peticion
    const token = await generarJWT( uid, name);

  res.json({
    ok: true,
    msg: "renew",
    uid,
    name,
    token
  });


};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
