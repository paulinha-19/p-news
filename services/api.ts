import axios from 'axios';
import { Alert } from 'react-native';
import { httpErrorMessages, networkMessages } from '@/utils/http-messages';

export const api = axios.create({
    baseURL: `https://gnews.io/api/v4/top-headlines`,
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        console.log(`➡️ Requisição: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => {
        console.log('Falha na requisição:', error.message);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log(`Resposta OK: ${response.status} ${response.config.url}`);
        return response;
    },
    (error) => {

        if (error.code === 'ECONNABORTED') {
            Alert.alert('Erro de Conexão', networkMessages.timeout);
        } else if (!error.response) {
            Alert.alert('Erro de Rede', networkMessages.noResponse);
        } else {
            const status = error.response.status;
            const message = httpErrorMessages[status] || networkMessages.default;
            Alert.alert(`Erro ${status}`, message);
        }

        return Promise.reject(error);
    }
);
