import React from 'react';

const Button = ({children}) => {
    // console.log(props);
    // const { children } = props;
    return (
        <div className="text-center py-7">
            <button className="btn btn-error btn-outline btn-sm">{children}</button>
        </div>
    );
};

export default Button;