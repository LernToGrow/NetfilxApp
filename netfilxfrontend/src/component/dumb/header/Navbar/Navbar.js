import React from "react";
import './Navbar.css';

function Navbar({children, ...restProps}){
    return(
        <nav {...restProps}>
            {children}
        </nav>
    )
}
export default Navbar;