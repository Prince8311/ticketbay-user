import { useState } from "react";
import { AuthWrapper } from "../Styles/AuthStyle";
import OTPInput from "react-otp-input";

const AuthenticationPage = () => {
    const [authStatus, setAuthStatus] = useState('signin');
    const [authSubStatus, setAuthSubStatus] = useState('');
    const [transitionDelay, setTransitionDelay] = useState('0.7');
    const [otp, setOtp] = useState('');

    function redirectToSignIn() {
        setAuthStatus('signin');
        setAuthSubStatus('');
        setTransitionDelay('0.7');
    }

    function redirectToSignUp() {
        setAuthStatus('signup');
        setAuthSubStatus('');
        setTransitionDelay('0.7');
    }

    function redirectToForgotPassword() {
        setAuthSubStatus('forgotPassword');
        setTransitionDelay('0');
    }

    function redirectToOtpVerify() {
        setAuthSubStatus('verifyOtp');
        setTransitionDelay('0');
    }

    const maskEmail = (email) => {
        const [user, domain] = email.split("@");
        const maskedUser =
            user.length <= 5
                ? `${user.slice(0, 1)}****${user.slice(-1)}`
                : `${user.slice(0, 3)}****${user.slice(-2)}`;
        return `${maskedUser}@${domain}`;
    };
    const maskedEmail = maskEmail('sourishmondal.vizac@gmail.com');

    return (
        <>
            <AuthWrapper className={`${authStatus} ${authSubStatus}`}>
                <div className="auth_form sign_in" style={{transitionDelay: `${transitionDelay}s`}}>
                    <div className="form_head">
                        <h4>Sign <span><b>I</b>n</span></h4>
                    </div>
                    <div className="form_sec">
                        <div className="input_box">
                            <label><i className="fa-solid fa-user"></i></label>
                            <input type="text" required />
                            <span>Email / Mobile No.</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-lock"></i></label>
                            <input type="text" required />
                            <span>Password</span>
                            <a><i className="fa-solid fa-eye-slash"></i></a>
                        </div>
                        <div className="forgot_btn">
                            <a onClick={redirectToForgotPassword}>Forgot password?</a>
                        </div>
                        <div className="form_btn">
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className="auth_form sign_up" style={{ transitionDelay: `${transitionDelay}s` }}>
                    <div className="form_head">
                        <h4>Sign <span><b>U</b>p</span></h4>
                    </div>
                    <div className="form_sec">
                        <div className="input_box">
                            <label><i className="fa-solid fa-user"></i></label>
                            <input type="text" required />
                            <span>Name</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-envelope"></i></label>
                            <input type="text" required />
                            <span>Email</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-phone"></i></label>
                            <input type="text" required />
                            <span>Mobile No.</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-lock"></i></label>
                            <input type="text" required />
                            <span>Password</span>
                            <a><i className="fa-solid fa-eye-slash"></i></a>
                        </div>
                        <div className="form_btn">
                            <button onClick={redirectToOtpVerify}>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className="auth_form forgot_password">
                    <div className="form_head">
                        <h4>Forgot <span><b>P</b>assword</span></h4>
                        <p>Please provide your registered email addess</p>
                    </div>
                    <div className="form_sec">
                        <div className="input_box">
                            <label><i className="fa-solid fa-envelope"></i></label>
                            <input type="text" required />
                            <span>Email</span>
                        </div>
                        <div className="form_btn">
                            <button onClick={redirectToOtpVerify}>Send OTP</button>
                            <a onClick={() => {
                                setAuthSubStatus('');
                                setTransitionDelay('0');
                            }}><i className="fa-solid fa-arrow-left-long"></i>Go Back</a>
                        </div>
                    </div>
                </div>
                <div className="auth_form otp_verify">
                    <div className="form_head">
                        <h4>Verify <span><b>O</b>tp</span></h4>
                        <p>We have send a 6 digit otp to <span>{maskedEmail}</span></p>
                    </div>
                    <div className="form_sec">
                        <div className="otp_input_box">
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderInput={(props) => <input {...props} inputMode="numeric" pattern="[0-9]*" required />}
                            />
                        </div>
                        <div className="form_btn">
                            <button>Verify</button>
                            <a onClick={() => setAuthSubStatus(authStatus === 'signin' ? 'forgotPassword' : '')}><i className="fa-solid fa-arrow-left-long"></i>Go Back</a>
                        </div>
                    </div>
                </div>
                <div className="panel_content right">
                    <div className="panel_items">
                        <h4>New here ?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis, sit beatae deleniti illo temporibus?</p>
                        <button onClick={redirectToSignUp}>Sign Up</button>
                    </div>
                    <img src="/images/login-icon.svg" alt="" />
                </div>
                <div className="panel_content left">
                    <div className="panel_items">
                        <h4>One of us ?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis, sit beatae deleniti illo temporibus?</p>
                        <button onClick={redirectToSignIn}>Sign In</button>
                    </div>
                    <img src="/images/register-icon.svg" alt="" />
                </div>
            </AuthWrapper>
        </>
    );
}

export default AuthenticationPage;