import React, { useLayoutEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

import './layout.css';

const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);
    const [boxSize, setboxSize] = useState({})

    const {  
        data
    } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    //console.log(useFetch(state));
    
    const {
        author,quote
    }= !!data&&data[0];
    console.log(author,quote);


    const pTag = useRef();

    useLayoutEffect(() => {
        setboxSize(pTag.current.getBoundingClientRect())
    }, [quote]);


    return (
        <div>
            <h1>Beaking Bad Quotes</h1>

            <hr />

 
            <blockquote className="blockquote text-right" id="quote">
                <p className="mb-0"
                    ref={ pTag }
                > { quote } </p>
            </blockquote>


            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            
            <div className="row">
                <button className="btn btn-primary" onClick={decrement}> quote Anterior </button> 
                <button className="btn btn-primary" onClick={increment}> Siguiente quote  </button>                     
            </div>
              
        </div>
    )
}

export default Layout;
