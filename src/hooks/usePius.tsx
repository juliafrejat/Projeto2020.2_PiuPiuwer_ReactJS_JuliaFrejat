import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { User } from './useAuth';

export interface PiuData {
    user: User;
    likers: Array<User>;
    favoritado_por: Array<User>;
    texto: string;
    horario: string;
    id: number;
}

interface PiusContextData {
    pius: Array<PiuData>;
    piusRequest(): Promise<void>;
    handleFavorite(): Promise<void>;
    handleLike(): Promise<void>;
    handleDelete(): Promise<void>;
}

const PiusContext = createContext<PiusContextData>({} as PiusContextData);

export const PiusProvider: React.FC = ({children}) => {
    const [pius, setPius] = useState<Array<PiuData>>([] as Array<PiuData>);

    const piusRequest = useCallback(async () => {
        const response = await api.get('/pius/')
        console.log(response);
        setPius(response.data)
    }, []);
    
    const handleFavorite = async () => {
        var favoriteCounter = 0;
        if (favoriteCounter%2 == 1) {
            // fazer request pra adicionar
        } else {
            // fazer request pra tirar
        }
    }
    const handleLike = async () => {
        var likeCounter = 0;
        if (likeCounter%2 == 1) {
            // fazer request pra adicionar
        } else {
            // fazer request pra tirar
        }
    }
    const handleDelete = async () => {
            
    }

    return (
        <PiusContext.Provider value={{ pius, piusRequest, handleFavorite, handleLike, handleDelete }}>
            {children}
        </PiusContext.Provider>
    )
}

export function usePius(): PiusContextData {
    const context = useContext(PiusContext);
    return context;
}