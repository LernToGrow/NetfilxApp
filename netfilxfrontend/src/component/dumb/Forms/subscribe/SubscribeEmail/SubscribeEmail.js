import React from "react";
import './SubscribeEmail.css';

function SubscribeEmail({ ...restProps}){
    return(
        <input className="subscribe-email" { ...restProps} />
    )
}
export default SubscribeEmail;