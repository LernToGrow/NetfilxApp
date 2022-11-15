import React from "react";
import HeaderWrapper from '../component/dumb/header/HeaderWrapper/HeaderWrapper';
import Navbar from '../component/dumb/header/Navbar/Navbar';
import Logo from '../component/dumb/header/Logo/Logo';
import SignupComponent from '../component/smart/signupComponent/SignupComponent';
import FooterCompomemt from '../component/dumb/footer/footerComponents/FooterComponents';

function SignupPage() {
    return (
        <>
            <HeaderWrapper>
                <Navbar className="Navbar-home">
                    <Logo />
                </Navbar>
                <SignupComponent/>
            </HeaderWrapper>
            <FooterCompomemt/>
        </>
    )
}
export default SignupPage;
