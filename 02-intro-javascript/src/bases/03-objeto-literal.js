const persona = {
    nombre: 'Tomy',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 555562323,
        lat: 14.4561321,
        lng: 34.12234643
    }
};

const persona2 = {...persona};

console.table( {persona:persona} );


console.table(persona2);