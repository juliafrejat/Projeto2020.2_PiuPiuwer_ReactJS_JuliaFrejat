import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
/* import api from '../services/api';

export interface piu {
    user: object,
    likers: object,
    favoritado_por: object,
    texto: string,
    horario: string
}

interface PiusContextData {
    piu: object;
}

const PiusContext = createContext<PiusContextData>({} as PiusContextData);

export const PiusProvider: React.FC = ({children}) => {
    const [data, setData] = useState<piu>({} as piu);

    const piusRequest = useCallback(async () => {
        const response = await api.get('/pius/')
        console.log(response);
        setData({})
    }, []);
    
    

    return (
        <PiusContext.Provider value={}>
            {children}
        </PiusContext.Provider>
    )
}

export function usePius(): PiusContextData {
    const context = useContext(PiusContext);
    return context;
} */