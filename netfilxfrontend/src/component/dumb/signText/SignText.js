import React from "react";
import './SignText.css';

function SignText({children , ...restProps}){
    return(
        <p className="sign-text" {...restProps}>
            {children}
        </p>
    )
}
export default SignText;
