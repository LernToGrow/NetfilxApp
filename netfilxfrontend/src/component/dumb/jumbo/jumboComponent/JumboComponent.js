import React from "react";
import './JumboComponent.css';
import JumboItems from "../jumboItems/JumboItems";
import Seperator from '../../seperator/Seperator';


function JumboComponent(){
    const data= [
        {
            'title': 'Enjoy on your TV.',
            'subTitle': 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            'imageSrc': './images/home/tv.png'
        },
        {
            'title': 'Download your shows to watch offline.',
            'subTitle': 'Save your favourites easily and always have something to watch.',
            'imageSrc': './images/home/mobile.jpg'
        },
        {
            'title': 'Watch everywhere.',
            'subTitle': 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            'imageSrc': './images/home/device-pile-in.png'
        },
        {
            'title': 'Create profiles for children.',
            'subTitle': 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            'imageSrc': './images/home/kidsValueProp.png'
        }
    ];
    return (
        <div className="jumbo-component">
        {
            data.map((item, index) => (
                <>
                <JumboItems alignment={index%2 === 0} title={item.title} subheading={item.subTitle} imageSrc={item.imageSrc}/>
                <Seperator/>
                </>
            ))
        }
        
        </div>        
    )
}
export default JumboComponent;