import React from "react";
import './FutureTitle.css';
function FutureTitle({children, ...restProps}){
    return(
       
            <h1{...restProps}>{children}</h1>
    )
}
export default FutureTitle;