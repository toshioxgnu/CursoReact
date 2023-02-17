import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dnepp8vkx',
    api_key: '674142741933193',
    api_secret: 'fI9bfcJv2JysuJ-0koV50lU-xYo',
    secure: true
});

describe('Pruebas en fileUpload', () => {

    test( 'Debe subir el archivo correctamente a Cloudinary', async() => {
        const imageUrl = 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg';
        const resp = await fetch( imageUrl );        
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect( typeof url ).toBe('string');
        // console.log(url);
        const segmenst = url.split('/');
        const imageId = segmenst[ segmenst.length - 1 ].replace('.jpg', '');
        // console.log(imageId)
        await cloudinary.api.delete_resources(['journal-app/'+imageId] );

    } );

    test ('debe retornar null', async() => {
        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);
        expect(  url ).toBe(null);
    } );
});
