import { useState } from 'react';
import './cadastro.css';
import Myfooter from '../components/footer.jsx';
import { useNavigate } from 'react-router-dom';
import {logo_G} from '../assets/img.jsx';

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
      console.log('Formulário enviado:', { username, email, password });
      // Aqui você pode enviar os dados para o backend
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='form-cad-container'>
        <img src={logo_G} id='logo_G'/>
        <h2>Criar Conta</h2>
        <div className="line_cad"></div>
        <div>
          <label>Nome de Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p id='error'>{errors.username}</p>}
        </div>
        
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p id='error'>{errors.email}</p>}
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p id='error'>{errors.password}</p>}
        </div>

        <div>
          <label>Confirme a Senha</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p id='error'>{errors.confirmPassword}</p>
          )}
        </div>

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