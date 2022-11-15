import React ,{ useState } from "react";
import AccordionItem from "../accordionItem/AccordionItem";
import AccordionText from "../accordionText/AccordionText";
import AccordionTitle from "../accordionTitle/AccordionTitle";
import './AccordionComponents.css';
const data = [
    {
        'title': 'What Is Netfilx ?',
        'text': 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!'
    },
    {
        'title': 'How Does Much Netfilx Cost ?',
        'text': 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.'
    },
    {
        'title': 'Where I Can Watch ?',
        'text': 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.  You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.'
    },
    {
        'title': 'How Do I Cancel ?',
        'text': 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
        'title': 'What I Can I Watch On Netfilx ?',
        'text': 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
        'title': 'Is Netfilx Good For Kids ?',
        'text': 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
    }
];
function AccordionComponents({ children, ...restProps }) {
    const [accordionState ,SetAccordionState]= useState(data.map(()=> false));
    return (
        <div className="accordion-components">
            <h1 className="accordion-heading">Frequently Asked Question</h1>
            <div className="accordion-wrapper">
                {
                    data.map((item, index) => (
                        <AccordionItem>
                            <AccordionTitle
                             isOpen={accordionState[index]}
                             handelClick={()=>{
                                let currentValue= accordionState[index];
                                let newValue= !currentValue;
                                let newAccordianState=[...accordionState];
                                for(let i=0; i<=accordionState.length; i++){
                                    newAccordianState[i]=false;
                                }
                                newAccordianState[index]=newValue;
                                SetAccordionState(newAccordianState);
                            }}>{item.title}</AccordionTitle>

                            <AccordionText isOpen={accordionState[index]}>{item.text}</AccordionText>
                        </AccordionItem>
                    ))
                }
            </div>
        </div>
    )
}
export default AccordionComponents;