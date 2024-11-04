const Seguidor = require('../models/seguidores.models');

// @desc    Get all seguidores
// @route   GET /api/seguidores
// @access  Public
exports.getSeguidor = async (req, res) => {
  try {
    const seguidores = await Seguidor.find();
    res.json(seguidores);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar seguidores: ' + err.message });
  }
};

// @desc    Get single seguidor
// @route   GET /api/seguidores/:id
// @access  Public
exports.getSeguidorById = async (req, res) => {
  try {
    const seguidor = await Seguidor.findById(req.params.id);
    if (!seguidor) {
      return res.status(404).json({ message: 'Seguidor não encontrado.' });
    }
    res.json(seguidor);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar seguidor: ' + err.message });
  }
};

// @desc    Create new seguidor
// @route   POST /api/seguidores
// @access  Public
exports.createSeguidor = async (req, res) => {
  const { usuario, seguindo } = req.body;
  try {
    const seguidor = new Seguidor({
      usuario,
      seguindo
    });
    await seguidor.save();
    res.status(201).json(seguidor);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar seguidor: ' + err.message });
  }
};

// @desc    Update seguidor
// @route   PUT /api/seguidores/:id
// @access  Public
exports.updateSeguidor = async (req, res) => {
  try {
    const seguidor = await Seguidor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!seguidor) {
      return res.status(404).json({ message: 'Seguidor não encontrado.' });
    }
    res.json(seguidor);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar seguidor: ' + err.message });
  }
};

// @desc    Delete seguidor
// @route   DELETE /api/seguidores/:id
// @access  Public
exports.deleteSeguidor = async (req, res) => {
  try {
    const seguidor = await Seguidor.findByIdAndDelete(req.params.id);
    if (!seguidor) {
      return res.status(404).json({ message: 'Seguidor não encontrado.' });
    }
    res.json({ message: 'Seguidor apagado com sucesso.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar seguidor: ' + err.message });
  }
};
