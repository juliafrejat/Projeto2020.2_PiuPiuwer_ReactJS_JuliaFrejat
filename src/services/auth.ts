import api from './api';

const username = '';
const password = '';

export default function logIn() {
    return new Promise(async resolve => {
        const response = await api.post('/login/', {
            username: username,
            password: password
        });
    })
}