const { default: heroes, owners} = require("./data/heroes");


console.log(heroes, owners);

const getHeroById = (id) =>  heroes.find( heroe => heroe.id === id );

console.log( getHeroById(2) );


const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner );

console.log(getHeroesByOwner('Marvel'));