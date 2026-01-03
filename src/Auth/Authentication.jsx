import { useState } from "react";
import { AuthWrapper } from "../Styles/AuthStyle";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import ButtonLoader from "../Components/Loader/ButtonLoader";
import axios from "axios";

const AuthenticationPage = () => {
    const api = getApiEndpoints();
    const [authStatus, setAuthStatus] = useState(() => {
        return localStorage.getItem("Auth Status") || 'signin';
    });
    const [authSubStatus, setAuthSubStatus] = useState(() => {
        return localStorage.getItem("Auth SubStatus") || '';
    });
    const [transitionDelay, setTransitionDelay] = useState('0.7');
    const [registrationMail, setRegistrationMail] = useState(() => {
        return localStorage.getItem("Registration Mail") || '';
    });

    function redirectToSignIn() {
        setAuthStatus('signin');
        setAuthSubStatus('');
        localStorage.setItem("Auth Status", 'signin');
        localStorage.removeItem("Auth SubStatus");
        setTransitionDelay('0.7');
    }

    function redirectToSignUp() {
        setAuthStatus('signup');
        setAuthSubStatus('');
        localStorage.setItem("Auth Status", 'signup');
        localStorage.removeItem("Auth SubStatus");
        setTransitionDelay('0.7');
    }

    function redirectToForgotPassword() {
        setAuthSubStatus('forgotPassword');
        localStorage.setItem("Auth SubStatus", 'forgotPassword');
        setTransitionDelay('0');
    }

    function redirectToOtpVerify() {
        setAuthSubStatus('verifyOtp');
        localStorage.setItem("Auth SubStatus", 'verifyOtp');
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

    // Registration 
    const [isRegistrationButtonLoading, setIsRegistrationButtonLoading] = useState(false);
    const [showRegistrationPassword, setShowRegistrationPassword] = useState(false);
    const [registrationFormData, setRegistrationFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    const isRegistrationFormValid = registrationFormData.name.trim() !== '' && registrationFormData.email.trim() !== '' && registrationFormData.phone.trim() !== '' && registrationFormData.password.trim() !== '';

    function toggleRegistrationPassword() {
        setShowRegistrationPassword(!showRegistrationPassword);
    }

    const handleRegistrationInputChange = (e) => {
        const { name, value } = e.target;
        setRegistrationFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        setIsRegistrationButtonLoading(true);
        try {
            const response = await axios.post(api.register, registrationFormData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                localStorage.setItem("Registration Mail", registrationFormData.email.trim());
                setRegistrationMail(registrationFormData.email.trim());
                toast.success(response?.data.message);
                setRegistrationFormData({
                    name: '',
                    email: '',
                    phone: '',
                    password: ''
                });
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsRegistrationButtonLoading(false);
            redirectToOtpVerify();
        }
    }

    // OTP Verify 
    const [isOtpButtonLoading, setIsOtpButtonLoading] = useState(false);
    const [otp, setOtp] = useState('');

    return (
        <>
            <AuthWrapper className={`${authStatus} ${authSubStatus}`}>
                <div className="auth_form sign_in" style={{ transitionDelay: `${transitionDelay}s` }}>
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
                            <input type="text" name="name" onChange={handleRegistrationInputChange} required />
                            <span>Name</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-envelope"></i></label>
                            <input type="text" name="email" onChange={handleRegistrationInputChange} required />
                            <span>Email</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-phone"></i></label>
                            <input type="text" name="phone" onChange={handleRegistrationInputChange} required />
                            <span>Mobile No.</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-lock"></i></label>
                            <input type={showRegistrationPassword ? 'text' : 'password'} name="password" onChange={handleRegistrationInputChange} required />
                            <span>Password</span>
                            <a onClick={toggleRegistrationPassword}><i className={`fa-solid ${showRegistrationPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></a>
                        </div>
                        <div className="form_btn">
                            <button className={(!isRegistrationFormValid || isRegistrationButtonLoading) ? 'disable' : ''} onClick={handleRegistrationSubmit} disabled={!isRegistrationFormValid || isRegistrationButtonLoading}>
                                {
                                    isRegistrationButtonLoading ?
                                        <ButtonLoader />
                                        :
                                        <>Sign Up</>
                                }
                            </button>
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
                        <p>We have send a 6 digit otp to <span>{maskEmail(registrationMail)}</span></p>
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
                            <button className={(otp.length < 6 || isOtpButtonLoading) ? 'disable' : ''} disabled={otp.length < 6 || isOtpButtonLoading}>Verify</button>
                            <a onClick={() => { authStatus === 'signin' ? redirectToForgotPassword() : redirectToSignUp() }}><i className="fa-solid fa-arrow-left-long"></i>Go Back</a>
                        </div>
                    </div>
                </div>
                <div className="panel_content right">
                    <div className="panel_items">
                        <h4>New here ?</h4>
                        <p>Join now and experience seamless booking.</p>
                        <button onClick={redirectToSignUp}>Sign Up</button>
                    </div>
                    <img src="/images/login-icon.svg" alt="" />
                </div>
                <div className="panel_content left">
                    <div className="panel_items">
                        <h4>One of us ?</h4>
                        <p>Continue to your account and start exploring.</p>
                        <button onClick={redirectToSignIn}>Sign In</button>
                    </div>
                    <img src="/images/register-icon.svg" alt="" />
                </div>
            </AuthWrapper>
        </>
    );
}

export default AuthenticationPage;