import api from './api';

export default async function logInRequest(username: string, password: string) {
    const response = await api.post('/login/', {
        username: username,
        password: password
    });
}