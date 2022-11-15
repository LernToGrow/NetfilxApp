import React from "react";
import "./headerwrapper.css";

function HeaderWrapper({children, ...restProps}){
    return(
        
            <header className="heeader-wrapper" {...restProps}>
                {children}
            </header>
        
    )
}
export default HeaderWrapper;