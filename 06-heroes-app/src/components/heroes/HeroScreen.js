import React, { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router'
import { getHeroesById } from '../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = Navigate();
    
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

    const onNavigateBack = () => {
        navigate(-1);
    }

    if( !hero ) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row animate__animated  animate__fadeInLeft">
            <div className="col-md-4 ">
                <img src={`../assets/heroes/${heroeId}.jpg`} 
                    alt={ hero.superhero }
                    className="img-thumbnail"
                />

            </div>

            <div className="col-md-8">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> { hero.alter_ego  }  </li>
                    <li className="list-group-item"><b>Publicador:</b> { hero.publisher }  </li>
                    <li className="list-group-item"><b>Primera Aparicion:</b> { hero.first_appearance }  </li>
                </ul>

                <h5>Personajes: </h5>
                <p>{ hero.characters }</p>

                <hr/>

                <button
                    className="btn btn-info"
                    onClick={ onNavigateBack }
                >Volver</button>

            </div>
        </div>
    )
}
