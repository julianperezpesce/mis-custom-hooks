import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);

    // factor es el agumento de la func increment y decrement
    // el valor 1 es el default definido por nosotros
    // en CounterWithCoustomHooks definimos el valor que queremos o 
    // dejamos el default que es 1
    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    {/* Lo mismo que arriba pero sin argumento
    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }
*/}

    const reset = () => {
        setCounter( initialState )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
