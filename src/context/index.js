import React, { useState } from 'react';

const CounterContext = React.createContext()

const Counter = ({children}) => {

    const [counter, setCounter] = useState(localStorage.getItem('counter'))

    const incrementCounter = () => {
        setCounter(counter+1)
        localStorage.setItem('counter', counter)
    }

    return (
        <CounterContext.Provider value={{counter, incrementCounter}}>
         {children}
        </CounterContext.Provider>
    );
};

export {Counter as default, CounterContext }