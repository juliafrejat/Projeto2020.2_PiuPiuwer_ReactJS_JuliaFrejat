import React, { useCallback, useEffect, useMemo } from 'react';

import { usePius } from '../../hooks/usePius';
import Piu from '../Piu';

function PiusArea() {
    const { pius, likedPiusIds, favoritedPiusIds, piusRequest } = usePius();

    useEffect(() => {
        piusRequest();
    }, []);

    const piuComponents = useMemo(() => {
        return pius.map((piu) => (
            <Piu 
                key={piu.id} 
                piuData={piu} 
                isLiked={likedPiusIds.includes(piu.id)} 
                isFavorited={favoritedPiusIds.includes(piu.id)}
            />
        ))
    }, [pius]);

    return (
        <>
            {piuComponents}
        </>
    )
}

export default PiusArea;