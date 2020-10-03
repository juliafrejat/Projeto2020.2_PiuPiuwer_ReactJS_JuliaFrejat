import React, { useCallback, useEffect, useMemo } from 'react';

import { usePius } from '../../hooks/usePius';
import Piu from '../Piu';

function PiusArea() {
    const { pius, piusRequest } = usePius();

    useEffect(() => {
        piusRequest();
    }, []);

    const piuComponents = useMemo(() => {
        return pius.map((piu) => (<Piu key={piu.id} piuData={piu}/>))
    }, [pius]);

    return (
        <>
            {piuComponents}
        </>
    )
}

export default PiusArea;