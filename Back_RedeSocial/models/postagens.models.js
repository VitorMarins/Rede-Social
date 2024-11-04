const mongoose = require('mongoose');

const PostagensSchema = new mongoose.Schema({
    mensagem: { type: String, required: true },
    data: { type: Date, default: Date.now },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: true },
    curtidas: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios' },
    CriadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Postagens', PostagensSchema);