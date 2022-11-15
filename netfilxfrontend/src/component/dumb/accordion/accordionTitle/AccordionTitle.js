import React from "react";
import './AccordionTitle.css';

function AccordionTitle({children,isOpen,index,handelClick, ...restProps}){
    return(
        <div className="accordion-title" {...restProps} onClick={()=>handelClick(console.log("clicked"))}>
            { children }
            {
                isOpen === true && 
                (
                    <img className="accordion-icon" src="./images/icons/close.png"/>
                )
            }
            {
                isOpen === false && 
                (
                    <img className="accordion-icon" src="./images/icons/plus.png"/>
                )
            }
        </div>
    )
}
export default AccordionTitle;