import React, { useMemo } from 'react'
import { Navigate, Route, useParams } from 'react-router'
import { getHeroesById } from '../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();
    
    const hero = useMemo(() => getHeroesById(heroeId), heroeId)


    if(!hero ){
        return <Navigate to="/" />
    }

    const handleReturn = () => {
        if(history.length <= 2) {
            history.push('/');
        }else{
            history.goBack();
        }
        
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero[0];

    return (
        <div className="row animate__animated  animate__fadeInLeft">
            <div className="col-md-4 ">
                <img src={`../assets/heroes/${heroeId}.jpg`} 
                    alt={ superhero }
                    className="img-thumbnail"
                />

            </div>

            <div className="col-md-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {alter_ego}  </li>
                    <li className="list-group-item"><b>Publicador:</b> {publisher}  </li>
                    <li className="list-group-item"><b>Primera Aparicion:</b> {first_appearance}  </li>
                </ul>

                <h5>Personajes: </h5>
                <p>{characters}</p>

                <hr/>

                <button
                    className="btn btn-info"
                    onClick={handleReturn}
                >Volver</button>

            </div>
        </div>
    )
}
