 import { useState } from 'react';
 import './Cadastro.css';
 import Myfooter from '../components/footer.jsx';


function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    return (
        <>
            <form id='form-cadastro'>
                <span id='text-conta'>Criar Conta</span>
                <div id=''>
                    <input
                        type="text"
                        id="nome_Cadastro"
                        placeholder='Digite seu Nome:'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        minLength={4}
                        autoComplete="off"
                    />
                    <input
                        type="email"
                        id="email_Cadastro"
                        placeholder='Digite seu Email:'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        id="senha_Cadastro"
                        placeholder='Digite sua Senha:'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        minLength={6}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        id="confirmarSenha_Cadastro"
                        placeholder='Confirme sua Senha:'
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                        minLength={6}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        autoComplete="off"
                    />
                    <label id='form-checkbox'>
                        <input type="checkbox" name="termos" required />
                        Eu concordo com os Termos do Usuário.
                    </label>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
            <Myfooter />
        </>
    );
}

export default Cadastro;