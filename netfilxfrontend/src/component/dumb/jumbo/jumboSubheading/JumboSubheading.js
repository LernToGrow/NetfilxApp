import React from "react";
import './JumboSubheading.css'

function JumboSubheading({children, ...restProps}){
    return(
        <h2 className="JumboSubheading" {...restProps}>
            {children}
        </h2>
    )
}
export default JumboSubheading;