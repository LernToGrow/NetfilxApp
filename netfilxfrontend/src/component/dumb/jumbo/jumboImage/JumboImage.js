import React from "react";
import './Jumboimage.css';
function JumboImage({...restProps}){
    return(
        <img className="jumboimage" {...restProps}/>
    )
}
export default JumboImage;