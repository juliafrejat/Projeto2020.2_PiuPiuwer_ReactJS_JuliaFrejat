import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { User } from './useAuth';

export interface PiuData {
    usuario: User;
    likers: Array<User>;
    favoritado_por: Array<User>;
    texto: string;
    horario: string;
    id: number;
}

interface PiusContextData {
    pius: Array<PiuData>;
    piusRequest(): Promise<void>;
    sendPiu(idUsuarioLogado: number, textoPiu: string): Promise<void>;
    handleFavorite(): Promise<void>;
    handleLike(): Promise<void>;
    handleDelete(piu: PiuData): Promise<void>;
    //findPiuId(piu: HTMLDivElement): number;
}

const PiusContext = createContext<PiusContextData>({} as PiusContextData);

export const PiusProvider: React.FC = ({children}) => {
    const [pius, setPius] = useState<Array<PiuData>>([] as Array<PiuData>);

    const piusRequest = useCallback(async () => {
        const response = await api.get('/pius/')
        console.log(response);
        setPius(response.data)
    }, []);

    const sendPiu = useCallback(async (idUsuarioLogado, textoPiu) => {
        const response = await api.post('/pius/', {
            usuario: idUsuarioLogado,
            texto: textoPiu
        })
        setPius([ ...pius, response.data ]);
    }, [setPius, api, pius])
    
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

    const handleDelete = async (piu: PiuData) => {
        const piuId = piu.id;
        console.log(piuId);
        //api.delete(`/pius/${piuId}`)
    }

    return (
        <PiusContext.Provider value={{ pius, piusRequest, sendPiu, handleFavorite, handleLike, handleDelete }}>
            {children}
        </PiusContext.Provider>
    )
}

export function usePius(): PiusContextData {
    const context = useContext(PiusContext);
    return context;
}