import React from "react";
import './SignCaptcha.css';

function SignCaptcha({children , ...restProps}){
    return(
        <p className="sign-captcha" {...restProps}>
            {children}
        </p>
    )
}
export default SignCaptcha;