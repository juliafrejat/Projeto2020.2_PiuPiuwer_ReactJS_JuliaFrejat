import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import api from '../services/api';

export interface user {
    username: string;
    first_name: string;
    last_name: string;
    foto: string;
    seguidores?: [];
    id: number;
    pius: [];
    favoritos: [];
    seguindo?: [];
    email: string;
}

interface AuthState {
    token: string;
    user: object;
}

interface AuthContextData {
    user: object;
    token: string;
    logIn(user: object): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>({} as AuthState);

    useEffect(() => {
        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        if (user && token) {
            api.defaults.headers.authorization = `JWT ${token}`;
            setData({ user: JSON.parse(user), token: token });
        }

    }, []);
    
    const logIn = useCallback(async ({username, password}) => {
        try {
            const response = await api.post('/login/', {username, password});
            const { token, user } = response.data;
            localStorage.setItem('@Project:token', token);
            localStorage.setItem('@Project:user', JSON.stringify(user));

            if (!!token) {
                const userResponse = await api.get('/usuarios/?search='+ username);
                const user = userResponse.data[0];
                localStorage.setItem('@Project:user', JSON.stringify(user));

                api.defaults.headers.authorization = `JWT ${token}`;
                setData({ token, user });
            }
        } catch (error) {
            const response = error.response;

            if (response.global) {
                return 'Usuário e/ou senha incorretos';
            }

            if (response.username) {
                return 'Usuário não pode ser em branco.'
            }

            if (response.password) {
                return 'Senha não pode ser em branco.'
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{token: data.token, user: data.user, logIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}