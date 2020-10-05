// Desestructuracion
// Asignacion Desestructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

const {nombre,edad,clave} = persona;

console.log(nombre, edad,clave);
// console.log(persona.edad);
// console.log(persona.clave);


const useContext = ({nombre,edad, rango}) => {

    // console.log(edad,nombre, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1531,
            lng: -15.3123156
        }
    }

}

const {nombreClave,anios, latlng:{ lat,lng }} = useContext(persona);


console.log(nombreClave, anios);
console.log(lat,lng);