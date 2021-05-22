import React, { useState } from 'react';
import MultipleCustomHooks from '../03-Examples/MultipleCustomHooks';

import '../02-useEffect/effect.css';

const RealExampleRef = () => {

    const [show, setShow] = useState(true);

    return (
        <div>
            <h1> Real Example Ref</h1>
            <hr/>

            { show && <div className="col-md-6">
                <MultipleCustomHooks />
            </div>}
            

            <button
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow(!show)
                } }
            >Show/Hide</button>

        </div>
    )
}

export default RealExampleRef
