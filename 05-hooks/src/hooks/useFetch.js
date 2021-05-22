import { useEffect, useRef, useState } from "react";

const useFetch = ( url ) => {
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    const [state, setstate] = useState({
        data:null,
        loading: true,
        error:null
    });

    useEffect(() => {

        fetch(url)
            .then(
                resp => resp.json()
            )
            .then(
                data => {
                    if(isMounted.current) {
                        setstate({
                            loading:false,
                            error:null,
                            data
                        });
                
                    }else {
                        console.log('No se monto')
                    }
                    
                }
                
            )
        
    }, [url]);

    return state;
}

export default useFetch
