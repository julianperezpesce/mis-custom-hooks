import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    // Este useEffect permite desmontar el setState, para
    // evitar que siga cambiando el state cuando he presionado
    // ocultar
    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect( () => {

        setState({
            data: null,
            loading: true,
            error: null
        }) // Esto permite cargar el loading antes de la sgte frase

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if( isMounted.current ){
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    } else {
                        console.log("setState didn't mount");
                    };                
            });
    }, [url]);

    return state;

}
