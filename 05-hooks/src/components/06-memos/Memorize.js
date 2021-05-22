import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small';

import '../05-useLayoutEffect/layout.css'

const Memorize = () => {

    const { counter,increment } = useCounter(10);
    const [show, setshow] = useState(false);


    return (
        <div>
            <h1>Memorize <Small value={counter}/> </h1>


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

export default Memorize
