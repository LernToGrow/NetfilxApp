import React from "react";
import './SignupComponent.css';
import SignTitle from "../../dumb/signinTitle/SignTitle";
import SignInput from '../../dumb/signInput/SignInput';
import SignText from "../../dumb/signText/SignText";
import SignButton from '../../dumb/signButton/SignButton';
import SignLink from "../../dumb/signlink/SignLink";
import SignCaptcha from "../../dumb/signcaptcha/SignCaptcha";

function SignupComponent({children , ...restProps}){
    return(
        <div className="sign-form-wrapper" {...restProps}>
        <form className="sign-form-base">
            <SignTitle>Sign up</SignTitle>
            <SignInput
                type="text"
                placeholder="Enter Name"
            />
            <SignInput
                type="text"
                placeholder="Enter Email"
            />
            <SignInput
                type="password"
                placeholder="Enter password"
                autoComplete='off'
            />
            <SignButton >Sign up</SignButton>
            <SignText>Already A User?
                <SignLink>Signin Now</SignLink>
            </SignText>
            <SignCaptcha>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</SignCaptcha>
        </form>
    </div>
    )
}
export default SignupComponent;