import React from "react";
import AccordionComponents from "../component/dumb/accordion/accordionComponents/AccordionComponents";
import FooterComponents from "../component/dumb/footer/footerComponents/FooterComponents";
import JumboComponent from "../component/dumb/jumbo/jumboComponent/JumboComponent";
import Seperator from "../component/dumb/seperator/Seperator";
import HeaderComponent from "../component/smart/HeaderComponent";

function HomePage(){
    return(
        <div>
            <HeaderComponent/>
            <Seperator/>
            <JumboComponent/>
            <AccordionComponents/>
            <Seperator/>
            <FooterComponents/>
        </div>
    )
}
export default HomePage;