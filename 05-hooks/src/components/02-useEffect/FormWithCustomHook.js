import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm';
import './effect.css'

export const FormWithCustomHook = () => {

    const [formValues , handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} =  formValues;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    value = {name}
                    onChange={ handleInputChange } 
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    value = {email}
                    onChange={ handleInputChange } 
                />
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*******"
                    value = { password }
                    onChange={ handleInputChange } 
                />
            </div>

            <button type="submit" className="btn btn-primary"> Guardar</button>

        </form>
    )
}

