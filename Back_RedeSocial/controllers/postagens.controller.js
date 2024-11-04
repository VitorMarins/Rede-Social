const Postagem = require('../models/postagens.models');

// @desc    Get all postagens
// @route   GET /api/postagens
// @access  Public
exports.getPostagem = async (req, res) => {
  try {
    const postagem = await Postagem.find();
    res.json(postagem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single postagem
// @route   GET /api/postagens/:id
// @access  Public
exports.getPostagemById = async (req, res) => {
  try {
    const postagem = await Postagem.findById(req.params.id);
    if (!postagem) {
      return res.status(404).json({ message: 'Postagem não encontrada.' });
    }
    res.json(postagem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new postagem
// @route   POST /api/postagens
// @access  Public
exports.createPostagem = async (req, res) => {
  const { mensagem, data, turmas, autor } = req.body;
  try {
    const postagem = new Postagem({
        mensagem,
        data,
        turmas,
        autor
    });
    await postagem.save();
    res.status(201).json(postagem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update postagem
// @route   PUT /api/postagens/:id
// @access  Public
exports.updatePostagem = async (req, res) => {
  try {
    const postagem = await Postagem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!postagem) {
      return res.status(404).json({ message: 'Postagem não encontrada.' });
    }
    res.json(postagem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete postagem
// @route   DELETE /api/postagens/:id
// @access  Public
exports.deletePostagem = async (req, res) => {
  try {
    const postagem = await Postagem.findByIdAndDelete(req.params.id);
    if (!postagem) {
      return res.status(404).json({ message: 'Postagem não encontrada.' });
    }
    res.json({ message: 'Postagem apagado.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};