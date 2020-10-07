const { getHeroById } = require("./bases/08-importaciones-expo");


// const promesa = new Promise( (resolve, reject) => { 
//     setTimeout( () => {

//         // tarea
//         //Importar get heroe by id 
//         const heroe = getHeroById(4);
//         resolve(heroe)
//         reject('No se encontro el heroe')
//     },2000 )
//  } );

// promesa.then( 
//     (heroe) => {
//         console.log(heroe)
//     }
// )
// .catch( err => console.warn(err) )


const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => { 
        setTimeout( () => {
            // tarea
            //Importar get heroe by id 
            const heroe = getHeroById(id);
            if(heroe){
                resolve(heroe)
            }else{
                reject('Heroe no encontrado')
            }
            
            
        },2000 )
    } );
}

getHeroeByIdAsync(2)
.then( console.log )
.catch( console.warn );