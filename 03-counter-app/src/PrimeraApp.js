import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

    return(  
        <>
            <pre>{ saludo }</pre>
            <p> { subtitulo } </p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtitulo'
}

export default PrimeraApp;