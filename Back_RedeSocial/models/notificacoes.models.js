const mongoose = require('mongoose');

const NotificacoesSchema = new mongoose.Schema({
    mensagem: { type: String, required: true },
    data: { type: Date, default: Date.now },
    tipo: { type: String, enum: ['Postagem', 'Novo Seguidor'], required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: true }
});

module.exports = mongoose.model('Notificacoes', NotificacoesSchema);