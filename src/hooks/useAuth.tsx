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

/* interface error {
    value: string;
} */

interface AuthState {
    token: string;
    user: object;
}

interface AuthContextData {
    user: object;
    token: string;
    logIn(user: object): object;
    logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    //const [errorTxt, setErrorTxt] = useState<error>({} as error);

    useEffect(() => {
        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        if (user && token) {
            api.defaults.headers.Authorization = `JWT ${token}`;
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

                api.defaults.headers.Authorization = `JWT ${token}`;
                setData({ token, user });

                //setErrorTxt({value:''});
            }
        } catch (error) {
            const response = error.response;

            if (response.global) {
                //setErrorTxt({value:'Usuário e/ou senha incorretos'});
            }

            if (response.username) {
                //setErrorTxt({value:'Usuário não pode ser em branco.'});
            }

            if (response.password) {
                //setErrorTxt({value:'Senha não pode ser em branco.'});
            }
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem('@Project:token');
        localStorage.removeItem('@Project:user');
        setData({} as AuthState);
    }

    return (
        <AuthContext.Provider value={{token: data.token, user: data.user, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}