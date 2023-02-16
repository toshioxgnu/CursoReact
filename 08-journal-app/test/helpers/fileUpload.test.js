import { fileUpload } from "../../helpers/fileUpload";

describe('Pruebas en fileUpload', () => {

    test( 'Debe subir el archivo correctamente a Cloudinary', async() => {
        const imageUrl = 'https://plantillasdememes.com/img/plantillas/te-parece-que-somos-ricos01610585807.png';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect( typeof url ).toBe('string');

    } );

});
