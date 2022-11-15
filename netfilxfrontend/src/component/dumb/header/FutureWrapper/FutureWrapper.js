import React from "react";
import './FutureWrapper.css';
function FutureWrapper({children,...restProps}){
    return(
            <div {...restProps}>
                {children}
            </div>
    )
}
export default FutureWrapper;