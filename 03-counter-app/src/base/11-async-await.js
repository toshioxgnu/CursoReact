
export const getImagen = async() => {

    try {

        const apiKey = 'mGT4mPb0wmbp0Dz1ZXdTlFQpoHWRrah0';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No Existe';
    }
    
}

