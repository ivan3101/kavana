import React from 'react';

const ServicesWithRef = ServicesComponent => {
    const forwardRef = (props, ref) => (
        <ServicesComponent forwadedRef={ref} {...props}/>
    );

    return React.forwardRef(forwardRef)
};

export default ServicesWithRef;
