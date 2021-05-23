import React from 'react'
import HeroList from '../heroes/HeroList';

const MarvelSreen = () => {

    const publisher = 'Marvel Comics';

    return (
        <div>
            <HeroList publisher={ publisher } />        
        </div>
    )
}

export default MarvelSreen
