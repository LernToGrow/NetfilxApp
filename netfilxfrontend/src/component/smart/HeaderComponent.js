import React from "react";
import HeaderWrapper from "../dumb/header/HeaderWrapper/HeaderWrapper";
import Navbar from "../dumb/header/Navbar/Navbar";
import Logo from "../dumb/header/Logo/Logo";
import SigninButton from "../dumb/header/signinbutton/SigninButton";
import FutureWrapper from "../dumb/header/FutureWrapper/FutureWrapper";
import FutureTitle from "../dumb/header/FutureTitle/FutureTitle";
import SubscribeWrapper from "../dumb/Forms/subscribe/SubscribeWrapper/SubscribeWrapper";
import SubscribeEmail from "../dumb/Forms/subscribe/SubscribeEmail/SubscribeEmail";
import SubscribeButton from "../dumb/Forms/subscribe/SubscribeButton/SubscribeButton";

function HeaderComponent(){
    return(
        <>
        <HeaderWrapper>
            <Navbar className="Navbar-home">
                <Logo/>
                <SigninButton/>
            </Navbar>
            <FutureWrapper className='future-wrapper-home'>
                <FutureTitle  className='future-title-home'>
                    Unlimited movies, TV show and more..
                    <h3 className="future-title-home-data">Watch anywhere. Cancel anytime.</h3>
                    <h3 className="future-title-home-data">Ready to watch? Enter your email to create or restart your membership.</h3>
                </FutureTitle> 
            </FutureWrapper>
            <SubscribeWrapper>
                <SubscribeEmail></SubscribeEmail>
                <SubscribeButton>Get Started</SubscribeButton>
            </SubscribeWrapper>
        </HeaderWrapper>
        
        </>
        
    )
}
export default HeaderComponent;