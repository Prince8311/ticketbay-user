import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthWrapper } from "../Styles/AuthStyle";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import ButtonLoader from "../Components/Loader/ButtonLoader";
import axios from "axios";
import { UserData } from "../Context/PageContext";

const AuthenticationPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const { setAuthToken } = UserData();
    const [authStatus, setAuthStatus] = useState(() => {
        return localStorage.getItem("Auth Status") || 'signin';
    });
    const [authSubStatus, setAuthSubStatus] = useState(() => {
        return localStorage.getItem("Auth SubStatus") || '';
    });
    const [transitionDelay, setTransitionDelay] = useState('0.7');
    const [verificationMail, setVerificationMail] = useState(() => {
        return localStorage.getItem("verification Mail") || '';
    });

    function redirectToSignIn() {
        setAuthStatus('signin');
        setAuthSubStatus('');
        setRegistrationFormData({
            name: '',
            email: '',
            phone: '',
            password: ''
        });
        localStorage.setItem("Auth Status", 'signin');
        localStorage.removeItem("Auth SubStatus");
        setTransitionDelay('0.7');
    }

    function redirectToSignUp() {
        setAuthStatus('signup');
        setAuthSubStatus('');
        setUserName('');
        setPassword('');
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

    function redirectToChangePassword() {
        setAuthSubStatus('changePassword');
        localStorage.setItem("Auth SubStatus", 'changePassword');
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
                localStorage.setItem("verification Mail", registrationFormData.email.trim());
                setVerificationMail(registrationFormData.email.trim());
                toast.success(response?.data.message);
                setRegistrationFormData({
                    name: '',
                    email: '',
                    phone: '',
                    password: ''
                });
                redirectToOtpVerify();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsRegistrationButtonLoading(false);
        }
    }

    // OTP Verify 
    const [isOtpButtonLoading, setIsOtpButtonLoading] = useState(false);
    const [otp, setOtp] = useState('');

    const handleOtpVerify = async (e) => {
        e.preventDefault();
        setIsOtpButtonLoading(true);
        const payload = {
            otp,
            ...(authStatus === 'signup' && { isRegistration: true }),
        };
        try {
            const response = await axios.post(api.verifyOtp, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                localStorage.removeItem("verification Mail");
                setVerificationMail('');
                toast.success(response?.data.message);
                setOtp('');
                if (authStatus === 'signup') {
                    redirectToSignIn();
                } else {
                    redirectToChangePassword();
                }
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsOtpButtonLoading(false);
        }
    }

    // Forgot Password 
    const [isForgotButtonLoading, setIsForgotButtonLoading] = useState(false);
    const [recoveryMail, setRecoveryMail] = useState('');
    const isForgotButtonValid = recoveryMail.trim() !== '';

    const handleVerifyEmail = async (e) => {
        e.preventDefault();
        const payload = { email: recoveryMail };
        setIsForgotButtonLoading(true);
        try {
            const response = await axios.post(api.forgotPassword, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                localStorage.setItem("verification Mail", recoveryMail.trim());
                setVerificationMail(recoveryMail.trim());
                toast.success(response?.data.message);
                setRecoveryMail('');
                redirectToOtpVerify();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsForgotButtonLoading(false);
        }
    }

    // Change Password 
    const [isChangeButtonLoading, setIsChangeButtonLoading] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const isChangePasswordFormValid = newPassword.length > 0 && confirmPassword.length > 0 && newPassword === confirmPassword;
    const showMismatchWarning =
        (newPassword.length > 0 && confirmPassword.length > 0 && newPassword !== confirmPassword) ||
        ((newPassword.length > 0 && confirmPassword.length === 0) ||
            (confirmPassword.length > 0 && newPassword.length === 0));

    const handleChangePassword = async (e) => {
        e.preventDefault();
        const payload = { password: newPassword, confirmPassword: confirmPassword };
        setIsChangeButtonLoading(true);
        try {
            const response = await axios.post(api.resetPassword, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                toast.success(response?.data.message);
                setNewPassword('');
                setConfirmPassword('');
                setAuthSubStatus('');
                setTransitionDelay('0');
                localStorage.removeItem("Auth SubStatus");
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsChangeButtonLoading(false);
            setShowNewPassword(false);
            setShowConfirmPassword(false);
        }
    }

    // Login 
    const [isLoginButtonLoading, setIsLoginButtonLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const isLoginFormValid = userName.trim() !== '' && password.trim() !== '';

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const payload = { name: userName, password: password };
        setIsLoginButtonLoading(true);
        try {
            const response = await axios.post(api.login, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                toast.success(response?.data.message);
                localStorage.setItem("authToken", response?.data.authToken);
                setAuthToken(response?.data.authToken);
                setUserName('');
                setPassword('');
                navigate('/');
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsLoginButtonLoading(false);
        }
    }

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
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                            <span>Email / Mobile No.</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-lock"></i></label>
                            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <span>Password</span>
                            <a onClick={() => setShowPassword(!showPassword)}><i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></a>
                        </div>
                        <div className="forgot_btn">
                            <a onClick={() => {
                                redirectToForgotPassword();
                                setUserName('');
                                setPassword('');
                            }}>Forgot password?</a>
                        </div>
                        <div className="form_btn">
                            <button className={(!isLoginFormValid || isLoginButtonLoading) ? 'disable' : ''} onClick={handleLoginSubmit} disabled={!isLoginFormValid || isLoginButtonLoading}>
                                {
                                    isLoginButtonLoading ?
                                        <ButtonLoader />
                                        :
                                        <>Sign In</>
                                }
                            </button>
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
                            <input type="text" name="name" value={registrationFormData.name} onChange={handleRegistrationInputChange} required />
                            <span>Name</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-envelope"></i></label>
                            <input type="text" name="email" value={registrationFormData.email} onChange={handleRegistrationInputChange} required />
                            <span>Email</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-phone"></i></label>
                            <input type="text" name="phone" value={registrationFormData.phone} onChange={handleRegistrationInputChange} required />
                            <span>Mobile No.</span>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-lock"></i></label>
                            <input type={showRegistrationPassword ? 'text' : 'password'} name="password" value={registrationFormData.password} onChange={handleRegistrationInputChange} required />
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
                            <input type="text" value={recoveryMail} onChange={(e) => setRecoveryMail(e.target.value)} required />
                            <span>Email</span>
                        </div>
                        <div className="form_btn">
                            <button className={(!isForgotButtonValid || isForgotButtonLoading) ? 'disable' : ''} onClick={handleVerifyEmail} disabled={!isForgotButtonValid || isForgotButtonLoading}>
                                {
                                    isForgotButtonLoading ?
                                        <ButtonLoader />
                                        :
                                        <>Send OTP</>
                                }
                            </button>
                            <a onClick={() => {
                                setAuthSubStatus('');
                                setTransitionDelay('0');
                                setRecoveryMail('');
                                localStorage.removeItem("Auth SubStatus");
                                localStorage.removeItem("verification Mail");
                            }}><i className="fa-solid fa-arrow-left-long"></i>Go Back</a>
                        </div>
                    </div>
                </div>
                <div className="auth_form otp_verify">
                    <div className="form_head">
                        <h4>Verify <span><b>O</b>tp</span></h4>
                        <p>We have send a 6 digit otp to <span>{maskEmail(verificationMail)}</span></p>
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
                            <button className={(otp.length < 6 || isOtpButtonLoading) ? 'disable' : ''} onClick={handleOtpVerify} disabled={otp.length < 6 || isOtpButtonLoading}>
                                {
                                    isOtpButtonLoading ?
                                        <ButtonLoader />
                                        :
                                        <>Verify</>
                                }
                            </button>
                            <a onClick={() => {
                                authStatus === 'signin'
                                    ? redirectToForgotPassword()
                                    : redirectToSignUp();
                                setOtp('');
                                localStorage.removeItem("verification Mail");
                            }}><i className="fa-solid fa-arrow-left-long"></i>Go Back</a>
                        </div>
                    </div>
                </div>
                <div className="auth_form change_password">
                    <div className="form_head">
                        <h4>Change <span><b>P</b>assword</span></h4>
                        <p>Please reset your current password</p>
                    </div>
                    <div className="form_sec">
                        <div className="input_box">
                            <label><i className="fa-solid fa-lock"></i></label>
                            <input type={showNewPassword ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                            <span>New Password</span>
                            <a onClick={() => setShowNewPassword(!showNewPassword)}><i className={`fa-solid ${showNewPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></a>
                        </div>
                        <div className="input_box">
                            <label><i className="fa-solid fa-lock"></i></label>
                            <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            <span>Confirm Password</span>
                            <a onClick={() => setShowConfirmPassword(!showConfirmPassword)}><i className={`fa-solid ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></a>
                        </div>
                        {showMismatchWarning && (
                            <div className="error_message">
                                <p>Passwords must match</p>
                            </div>
                        )}
                        <div className="form_btn">
                            <button className={(!isChangePasswordFormValid || isChangeButtonLoading) ? 'disable' : ''} onClick={handleChangePassword} disabled={!isChangePasswordFormValid || isChangeButtonLoading}>
                                {
                                    isChangeButtonLoading ?
                                        <ButtonLoader />
                                        :
                                        <>Submit</>
                                }
                            </button>
                            <a onClick={() => {
                                setAuthSubStatus('');
                                setTransitionDelay('0');
                                setNewPassword('');
                                setConfirmPassword('');
                                setShowNewPassword(false);
                                setShowConfirmPassword(false);
                            }}><i className="fa-solid fa-arrow-left-long"></i>Go Back</a>
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