import { useState } from 'react';
import '../styles/cadastro.css';
import Myfooter from '../components/footer.jsx';
import cadastroApi from '../services/cadastro_api.jsx';
import { useNavigate } from 'react-router-dom';
import {logo} from '../assets/img.jsx';

function Cadastro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Nome de usuário é obrigatório';
    }

    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Formato de email inválido';
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      cadastroApi(username, email, password);
      navigate('/');
    }
  };

  return (
    <>
    <div id='logo-container'>
      <img src={logo} id='logo_cad'/>
    </div>
      <form onSubmit={handleSubmit} id='form-cad-container'>
        <h2>Criar uma nova conta</h2>
          <label>Nome de Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p id='error'>{errors.username}</p>}
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p id='error'>{errors.email}</p>}
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p id='error'>{errors.password}</p>}
          <label>Confirme a Senha</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p id='error'>{errors.confirmPassword}</p>
          )}
        <button type="submit">Criar Conta</button>
        </form>
        <div id="login-container">
            <p><a onClick={() => navigate('/')}>Tem uma conta?</a></p>
        </div>
        <Myfooter />
    </>
  );
}

export default Cadastro;