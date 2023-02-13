export const fileUpload = async ( file ) => {

    if( !file ) throw new Error( 'File undefined' );

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dnepp8vkx/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'journalApp');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        } );

        console.log(resp);
        if( !resp.ok  ) throw new Error( 'Error Uploading File' );

        const cloudResp = await resp.json();
        return cloudResp;
        
    }catch (error){
        console.log(error);
        throw new Error(error.message);
    }


}