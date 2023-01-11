import {  NavLink } from 'react-router-dom'
import React from 'react'

export const HeroCard = ( { 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    id
 } ) => {

    return (
        <div className="card ms-3" style={
            {
                maxWidth: 250
            }
        }>
            <div className="row ">
                <div className="col-md-3 card-img-top" >
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={ superhero } />
                </div>

                
                <div className="cold-md-9">
                    <div className="card-body">
                        <h5 className="card-title"> {superhero} </h5>
                        <p className="card-text"> { alter_ego } </p>

                        {
                            ( alter_ego !== characters )
                            && <p className="card-text" > { characters } </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> { first_appearance } </small>
                        </p>

                        <NavLink to={ `/hero/${id}` }  >Ver Mas...</NavLink>
                    </div>
                </div>
                
            </div>      
        </div>
    )
}
