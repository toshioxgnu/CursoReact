import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);

    //handleAdd
    const handdleAdd = () => {
        setCounter( counter + 1 );
    }

    //handleReset
    const handleReset = () => {
        setCounter( value )
    }

    const handleSustract = () => {
        setCounter( counter -1 )
    }

    return (
        <>
            <h1> Counter App </h1>
            <h2> { counter } </h2>

            <button onClick={ handdleAdd } >+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSustract } >-1</button>
            
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;