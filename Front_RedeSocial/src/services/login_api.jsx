import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://rede-social-api-y3ht.onrender.com/api/auth',
    timeout: 5000,
});

async function loginApi(username, password) {
    const loginData = {
        nome: username,
        senha: password
    };
    try {
        const response = await apiClient.post('/login', loginData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('Ocorreu um erro inesperado. Por favor, tente novamente.');
        }
    }
}

export default loginApi;