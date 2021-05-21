import React, { useEffect, useState } from 'react'

const Message = () => {

    const [cords, setcors] = useState({x:0, y:0});
    const { x,y } = cords;

    useEffect(() => {

        const mouseMove = (e) => {
            const cords = { x: e.x, y: e.y }
            //console.log(cors);        
            console.log(':D');
        }


        window.addEventListener('mousemove', (e) => {
            //const cors = { x: e.x, y: e.y }
            //console.log(cors);        
            console.log(':D');
        } )
        return () => {
            window.removeEventListener(' mousemove', mouseMove)
            console.log('Componente desmontado')
        }
    }, [])


    return (
        <div>
            <h3> Qui pazas </h3>
            <p>
                x:{ x } y: { y }
            </p>
        </div>
    )
}

export default Message
