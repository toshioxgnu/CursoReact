import React, { useMemo, useState } from 'react'
import { ProcesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'

import '../05-useLayoutEffect/layout.css'

const MemoHook = () => {

    const { counter,increment } = useCounter(1000);
    const [show, setshow] = useState(false);

    
    const memoProcesoPesado = useMemo(() => ProcesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h1>Memorize <small> {counter} </small> </h1>
            <hr/>

            <p> {ProcesoPesado( counter )} </p>


            <button className="btn btn-primary"
                onClick={increment}
            >+1</button>
            <button
                className="btn btn-danger"
                onClick={
                    () => {
                        setshow(!show)
                    }
                }
            >Show/Hide {JSON.stringify(show)} </button>
        </div>

    )
}

export default MemoHook
