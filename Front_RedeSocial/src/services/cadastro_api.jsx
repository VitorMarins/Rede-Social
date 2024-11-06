import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://rede-social-api-y3ht.onrender.com/api/auth',
    timeout: 5000,
});

async function CadastroApi(username, email, password ) {
    if (!username || !email || !password) {
        throw new Error('Todos os campos são obrigatórios.');
    }
    const cadastroData = {
        nome: username,
        email: email,
        senha: password,
        tipo: 'normal'
    };
    try {
        const response = await apiClient.post('/registrar', cadastroData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('Ocorreu um erro inesperado. Por favor, tente novamente.');
        }
    }
}

export default CadastroApi;