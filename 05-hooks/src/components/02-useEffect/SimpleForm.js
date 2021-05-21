import React, { useEffect, useState } from 'react'
import './effect.css'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;

    useEffect( () => {

    }, [] );

    useEffect( () => {

    }, [formState] );

    useEffect( () => {
        
    }, [email] );

    const handleInputName = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    value = {name}
                    onChange={ handleInputName } 
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    value = {email}
                    onChange={ handleInputName } 
                />
            </div>

            {
               name === '123' && <Message/> 
            }

        </>
    )
}

export default SimpleForm
