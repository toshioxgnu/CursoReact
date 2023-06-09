import React from 'react';
import useFetch from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

import '../02-useEffect/effect.css';

const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);
    

    const {  
        data
    } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    //console.log(useFetch(state));
    
    const {
        author,quote
    }= !!data&&data[0];
    console.log(author,quote);

    return (
        <div>
            <h1>Beaking Bad Quotes</h1>

            <hr />

                
            <blockquote className="blockquote text-right" id="quote">
                <p className="mb-0"> { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
            </blockquote>

            <div className="row">
                <button className="btn btn-primary" onClick={decrement}> quote Anterior </button> 
                <button className="btn btn-primary" onClick={increment}> Siguiente quote  </button>                     
            </div>
              
        </div>
    )
}

export default MultipleCustomHooks
