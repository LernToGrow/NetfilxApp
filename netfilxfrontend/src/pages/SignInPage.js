import React from "react";
import HeaderWrapper from '../component/dumb/header/HeaderWrapper/HeaderWrapper';
import Navbar from '../component/dumb/header/Navbar/Navbar';
import Logo from '../component/dumb/header/Logo/Logo';
import SignInComponent from '../component/smart/signinComponent/SignInComponent';
import FooterCompomemt from '../component/dumb/footer/footerComponents/FooterComponents';

function SignInPage() {
    return (
        <>
            <HeaderWrapper>
                <Navbar className="Navbar-home">
                    <Logo />
                </Navbar>
                <SignInComponent/>
            </HeaderWrapper>
            <FooterCompomemt/>
        </>
    )
}
export default SignInPage;
