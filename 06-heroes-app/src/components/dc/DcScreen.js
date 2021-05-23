import React from 'react'
import HeroList from '../heroes/HeroList'

const DcScreen = () => {

    const publisher = 'DC Comics';
    return (
        <div>
            <HeroList publisher={ publisher } />
        </div>
    )
}

export default DcScreen
