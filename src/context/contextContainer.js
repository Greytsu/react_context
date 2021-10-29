import React from 'react';
import Counter from './index'

const contextContainer = ({children}) => {
    return (
        <Counter>
            {children}
        </Counter>
    );
};

export default contextContainer;