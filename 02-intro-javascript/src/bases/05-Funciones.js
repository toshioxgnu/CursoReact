// Funciones

// const saludar = function(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) =>  `Hola, ${nombre}`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Krillin'));

const getUser = () => (
    {
        uid: 'ABD123',
        username: 'toshioxgnu'
    }
)
    

console.log( getUser() );

// Tarea
// 1.- Transformar a funcion de flecha
// 2.- Tiene que retornar un objeto implicito
// 3.- Pruebas

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC12345',
        username: nombre
    }
)


const  usuarioActivo =  getUsuarioActivo('Fernando');
const usuarioDeslogeado = getUsuarioActivo('Bulma');
console.log(usuarioActivo);
console.log(usuarioDeslogeado);

