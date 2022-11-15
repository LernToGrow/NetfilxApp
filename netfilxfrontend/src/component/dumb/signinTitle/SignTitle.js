import React from "react";
import './SignTitle.css';

function SignTitle({children, ...restProps}){
    return(
        <h1 className="sign-title" {...restProps}>
            {children}
        </h1>
    )
}
export default SignTitle;