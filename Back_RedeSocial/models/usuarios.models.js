const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuariosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  senha: { type: String, required: true },
  tipo: { type: String, enum: ['normal', 'admin'], required: true, default: 'normal' }
});

UsuariosSchema.pre('save', async function(next) {
  if (this.isModified('senha')) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

UsuariosSchema.methods.compareSenha = function(senha) {
  return bcrypt.compare(senha, this.senha);
};

module.exports = mongoose.model('Usuarios', UsuariosSchema);