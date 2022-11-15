import React from "react";
import './SignInComponent.css';
import SignTitle from "../../dumb/signinTitle/SignTitle";
import SignInput from '../../dumb/signInput/SignInput';
import SignText from "../../dumb/signText/SignText";
import SignButton from '../../dumb/signButton/SignButton';
import SignLink from "../../dumb/signlink/SignLink";
import SignCaptcha from "../../dumb/signcaptcha/SignCaptcha";

function SignInComponent({ children, ...restProps }) {
    return (
        <div className="sign-form-wrapper" {...restProps}>
            <form className="sign-form-base">
                <SignTitle>Sign In</SignTitle>
                <SignInput
                    type="text"
                    placeholder="Enter Email"
                />
                <SignInput
                    type="password"
                    placeholder="Enter password"
                    autoComplete='off'
                />
                <SignButton>Sign In</SignButton>
                <SignText>New To Netfilx?
                    <SignLink>Signup Now</SignLink>
                </SignText>
                <SignCaptcha>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</SignCaptcha>
            </form>
        </div>
    )
}
export default SignInComponent;
