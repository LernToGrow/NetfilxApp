import React from "react";
import './SignInput.css';

function SignInput({...restProps}){
    return(
        <input className="signin-input" {...restProps}/>
    )
}
export default SignInput;
