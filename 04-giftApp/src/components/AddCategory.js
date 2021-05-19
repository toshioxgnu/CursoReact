import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setcategories }) => {

    const [inputvalue, setinputvalue] = useState('');

    const handleInputChange = ( e ) => {
        setinputvalue(e.target.value);
    } 

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputvalue.trim().length > 2 ){
            setcategories( cats => [ inputvalue, ...cats] );
            setinputvalue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value = { inputvalue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory
