import React from 'react'
import useFetch from '../../hooks/useFetch'

import '../02-useEffect/effect.css'

const MultipleCustomHooks = () => {

    const state = `https://www.breakingbadapi.com/api/quotes/25`;
    console.log(useFetch(state));
    


    return (
        <div>
            <h1>Custom Hooks!</h1>
        </div>
    )
}

export default MultipleCustomHooks
