import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GiftExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Samurai X', ' Dragon ball']);

    //const handleAdd = ( newCategory ) => {
    //    setcategories( [...categories, newCategory] );
    //}

    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setcategories= { setcategories } />
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <li key={category}> {category} </li>
                    } )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;
