import { useState, useEffect } from 'react';
import '../styles/Login.css';
import loginApi from '../services/login_api.jsx';
import Myfooter from '../components/footer.jsx';
import { logo, logoGoogle, banner1, astore, gplay } from '../assets/img.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await loginApi(username,password);
      localStorage.setItem('token', token.token);
      navigate('/dashboard');
    }
    catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
  <div>
    <main>
      <div id="main-container">
        {/* Banner Container */}
        <div id="banner-container">
          <img src={banner1} alt="Crie uma conta no Fluxo" />
        </div>

        {/* Login e Registro */}
        <div id="form-container">
          <div id="form-box">
            <img id="logo-fluxo" src={logo} alt="Fluxo" />

            <form id="login-form" onSubmit={handleLogin}>
              <input
                type="text"
                name="username"
                placeholder="Nome de usuário ou e-mail"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
              <input type="submit" value="Entrar" />
            </form>

            <div className="separator">
              <div className="line"></div>
              <span>Ou</span>
            </div>

            <div id="other-links">
              <div id="google-login">
                <a href="#">
                  <img src={logoGoogle} alt="Google logo" />
                  <span>Entrar com o Google</span>
                </a>
              </div>
              <div id="forgot-pass">
                <a href="#">Esqueceu a senha?</a>
              </div>
            </div>
          </div>

          <div id="register-container">
            <p>Não tem uma conta? <a onClick={() => navigate('/cadastro')}>Cadastre-se</a></p>
          </div>

          <div id="get-app-container">
            <p>Obtenha o aplicativo.</p>
            <a href="#">
              <img src={astore} alt="Apple Store" />
            </a>
            <a href="#">
              <img src={gplay} alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
    </main>
    <Myfooter />
  </div>
  );
}

export default Login;