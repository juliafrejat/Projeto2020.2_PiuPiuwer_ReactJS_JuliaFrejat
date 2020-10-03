import React, { useEffect } from 'react';

import { usePius } from '../../hooks/usePius';
import Piu from '../Piu';

function PiusArea() {
    const { pius, piusRequest } = usePius();

    useEffect(() => {
        piusRequest();
    }, []);

    return (
        pius.map((piu) => (
            <Piu id={piu.id} piuData={piu}/>
        ))
    )
}

export default PiusArea;