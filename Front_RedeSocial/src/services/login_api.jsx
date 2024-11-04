import axios from 'axios';
const url = 'http://localhost:3000/api/auth/login';

async function loginApi(username, password) {
    const loginData = {
        nome: username,
        senha: password
    };
    try {
        const response = await axios.post(url, loginData);
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