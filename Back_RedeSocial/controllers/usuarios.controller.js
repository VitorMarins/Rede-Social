const Usuario = require('../models/usuarios.models');

exports.getUsuarios = async (req, res) => {
  try {
    const Usuarios = await Usuario.find();
    res.json(Usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario não encontrado.' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSeguidorByUsuarioId = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id).populate('seguidores');
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario não encontrado.' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario não encontrado.' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario apagado.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
