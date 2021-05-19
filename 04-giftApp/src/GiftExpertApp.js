import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GiftExpertApp = () => {

    const [categories, setcategories] = useState([]);

    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setcategories= { setcategories } />
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return (
                            <GifGrid 
                                key ={category}
                            category={ category } 
                            />
                        )
                    } )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;
