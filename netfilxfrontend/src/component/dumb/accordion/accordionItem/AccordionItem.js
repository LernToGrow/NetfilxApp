import React from "react";
import './AccordionItem.css';

function AccordionItem({children , ...restProps}){
    return(
        <div {...restProps}>
            {children}
        </div>
    )
}
export default AccordionItem;
