import React from "react";
import "./JumboItem.css";
import JumboTitle from "../jumnboTitle/JumboTitle";
import JumboSubheading from "../jumboSubheading/JumboSubheading";
import JumboImage from "../jumboImage/JumboImage";


function JumboItems({ children, alignment, title, subheading, imageSrc, imageAlt, ...restProps }) {
    return (
        <div className="jumbo-item">
            {
                alignment === true &&
                (
                    <div>
                        <JumboTitle>{title}</JumboTitle>
                        <JumboSubheading>{subheading}</JumboSubheading>
                    </div>
                )
            }
            {
                alignment === false &&
                (
                    <div className="jumbo-image-wrapper">
                        <JumboImage src={imageSrc} alt={imageAlt}></JumboImage>
                    </div>
                )
            }
            {
                alignment === true &&
                (
                    <div>
                        <JumboImage src={imageSrc} alt={imageAlt}></JumboImage>
                    </div>
                )
            }
            {
                alignment === false &&
                (
                    <div>
                        <JumboTitle>{title}</JumboTitle>
                        <JumboSubheading>{subheading}</JumboSubheading>
                    </div>
                )
            }

        </div>
    )
}
export default JumboItems;