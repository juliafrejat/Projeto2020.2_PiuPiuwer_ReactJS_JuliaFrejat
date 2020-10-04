import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth, User } from './useAuth';

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
    handleFavorite(piu: PiuData): Promise<void>;
    handleLike(piu: PiuData): Promise<void>;
    handleDelete(piu: PiuData): Promise<void>;
    //findPiuId(piu: HTMLDivElement): number;
}

const PiusContext = createContext<PiusContextData>({} as PiusContextData);

export const PiusProvider: React.FC = ({children}) => {
    const { loggedUserData } = useAuth();

    const [pius, setPius] = useState<Array<PiuData>>([] as Array<PiuData>);
    const [likeCounter, setLikeCounter] = useState(0);
    const [favoriteCounter, setFavoriteCounter] = useState(0);

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
    }, [setPius, pius])
    
    const handleFavorite = async (piu: PiuData) => {
        if (favoriteCounter%2 == 1) {
            api.post('/pius/favoritar/', {
                usuario: loggedUserData.id,
                piu: //id
            })
            // mudar cor da estrela
        } else {
            api.post('/pius/favoritar/', {
                usuario: loggedUserData.id,
                piu: //id
            })
            // mudar cor da estrela
        }
    }

    const handleLike = async (piu: PiuData) => {
        if (likeCounter%2 == 1) {
            api.post('/pius/dar-like/', {
                usuario: loggedUserData.id,
                piu: //id
            })
            // mudar cor do coracao
        } else {
            api.post('/pius/dar-like/', {
                usuario: loggedUserData.id,
                piu: //id
            })
            // mudar cor do coracao
        }
    }

    const handleDelete = async (piu: PiuData) => {
        //const piuId = piu.id;
        //console.log(piuId);
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