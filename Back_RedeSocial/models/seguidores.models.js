const mongoose = require('mongoose');

const SeguidoresSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: true },
    seguindo: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: true }
});

module.exports = mongoose.model('Seguidores', SeguidoresSchema);