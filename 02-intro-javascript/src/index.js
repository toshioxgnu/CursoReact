
const getImage = async () => {

    try{
        const apiKey = 'mGT4mPb0wmbp0Dz1ZXdTlFQpoHWRrah0';

        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    }catch(error){
        console.log(error);

    }

} 

getImage();

