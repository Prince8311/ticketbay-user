import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const AuthWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -10%;
        width: 2000px;
        height: 2000px;
        z-index: 2;
        border-radius: 50%;
        background: linear-gradient(-45deg, ${colors.themeColor}, ${colors.customColors.orangeColorLight});
        transform: translateY(-50%);
        transition: all 1.8s ease-in-out;
    }

    .auth_form {
        position: absolute;
        width: 550px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px 60px;
        z-index: 1;

        &.sign_in {
            top: 0;
        }

        &.sign_up {
            top: 0;
        }

        .form_head {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            h4 {
                position: relative;
                width: max-content;
                display: flex;
                font-family: "Oleo Script",system-ui;
                font-size: 28px;
                color: ${colors.themeColor};

                &::before {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    right: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, transparent 15%, ${colors.themeColor} 100%);
                    border-radius: 30px;
                }

                span {
                    position: relative;
                    margin-left: 6px;
                    text-transform: uppercase;
                    font-size: 20px;
                    font-weight: 800;
                    font-style: italic;
                    color: ${colors.customColors.blackColor1};

                    b {
                        font-weight: 600;
                        font-size: 28px;
                    }
                }
            }

            p {
                position: relative;
                margin-top: 15px;
                font-size: 13px;
                color: ${colors.customColors.blackColor2};

                span {
                    position: relative;
                    margin-left: 2px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                }
            }
        }

        .form_sec {
            position: relative;
            margin-top: 15px;
            width: 100%;
            display: flex;
            flex-direction: column;

            .input_box {
                position: relative;
                width: 100%;
                display: flex;
                width: 100%;
                height: 40px;
                background: ${colors.customColors.lightBackground};
                border-radius: 8px;
                margin-top: 15px;

                label {
                    position: relative;
                    width: 50px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    i {
                        font-size: 14px;
                        color: ${colors.customColors.blackColor3};
                    }
                }

                input {
                    position: relative;
                    width: calc(100% - 50px);
                    height: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor1};
                }

                span {
                    position: absolute;
                    top: 50%;
                    left: 50px;
                    font-size: 13px;
                    transform: translateY(-50%);
                    color: ${colors.customColors.blackColor2};
                    pointer-events: none;
                    transition: all 0.5s ease;
                }

                a {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    color: ${colors.customColors.blackColor3};
                    cursor: pointer;
                }

                input:focus ~ span,
                input:valid ~ span {
                    top: 0;
                    left: 40px;
                    font-weight: 500;
                    color: ${colors.themeColor};
                    font-size: 10px;
                }
            }

            .otp_input_box {
                position: relative;
                margin-top: 10px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                input {
                    position: relative;
                    width: 40px !important;
                    height: 40px;
                    border: none;
                    outline: none;
                    border-radius: 8px;
                    background: ${colors.customColors.lightBackground};
                    font-size: 13px;
                    color: ${colors.customColors.blackColor1};
                    margin-right: 10px;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }

            .forgot_btn {
                position: relative;
                margin-top: 10px;
                width: 100%;
                display: flex;
                justify-content: flex-end;

                a {
                    position: relative;
                    text-decoration: underline;
                    font-size: 12px;
                    color: ${colors.customColors.blueColor};
                    font-weight: 500;
                    cursor: pointer;
                }
            }

            .form_btn {
                position: relative;
                margin-top: 25px;
                display: flex;
                flex-direction: column;
                align-items: center;

                button {
                    position: relative;
                    width: 100%;
                    height: 40px;
                    font-family: "SUSE", sans-serif;
                    text-transform: uppercase;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.33px;
                    border: none;
                    cursor: pointer;
                    background: ${colors.themeColor};
                    color: ${colors.customColors.whiteColor};
                    border-radius: 8px;
                    transition: all 0.5s ease;
                    
                    &:hover {
                        letter-spacing: 1.5px;
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }

                    &.disable {
                        opacity: 0.3;
                        pointer-events: none;
                        transition: all 0.5s ease;
                    }
                }

                a {
                    position: relative;
                    margin-top: 10px;
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    text-decoration: none;
                    color: ${colors.customColors.blackColor2};
                    transition: all 0.5s ease;
                    
                    i {
                        margin-right: 6px;
                    }
                    
                    &:hover {
                        color: ${colors.customColors.blackColor};
                        transition: all 0.5s ease;
                    }
                }
            }
        }
    }

    .panel_content {
        position: absolute;
        top: 0;
        z-index: 5;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 80px 90px;
        padding-bottom: 25px;

        &.right {
            right: 0;
        }

        &.left {
            left: 0;
        }

        .panel_items {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.9s 0.6s ease-in-out;

            h4 {
                position: relative;
                font-size: 23px;
                color: ${colors.customColors.whiteColor};
                font-weight: 600;
            }

            p {
                position: relative;
                margin-top: 5px;
                font-size: 14px;
                color: ${colors.customColors.whiteColor};
            }

            button {
                position: relative;
                margin-top: 20px;
                width: 150px;
                height: 40px;
                border: 2px solid ${colors.customColors.whiteColor};
                background: transparent;
                cursor: pointer;
                font-size: 13px;
                letter-spacing: 0.33px;
                font-weight: 500;
                text-transform: uppercase;
                border-radius: 25px;
                color: ${colors.customColors.whiteColor};
            }
        }

        img {
            position: relative;
            margin-top: auto;
            width: 80%;
            height: auto;
        }
    }

    &.signin {
        &::before {
            left: 45%;
            transition: all 1.8s ease-in-out;
        }

        .auth_form {
            transition: all 1s ease-in-out;

            &.sign_in {
                left: 70px;
                opacity: 1;
                pointer-events: initial;
            }
            
            &.sign_up {
                right: 50%;
                opacity: 0;
                pointer-events: none;
            }

            &.otp_verify {
                top: 50%;
                left: 70px;
                opacity: 0;
                pointer-events: none;
                transition-delay: 0;
            }

            &.forgot_password {
                top: 50%;
                left: 70px;
                opacity: 0;
                pointer-events: none;
            }

            &.change_password {
                top: 50%;
                left: 70px;
                opacity: 0;
                pointer-events: none;
            }
        }

        .panel_content {
            &.right {
                pointer-events: initial;

                .panel_items {
                    transform: translateX(0);
                    transition: all 0.9s 0.6s ease-in-out;
                }

                img {
                    transform: translateX(0);
                    transition: all 1.1s 0.4s ease-in-out;
                }
            }

            &.left {
                pointer-events: none;

                .panel_items {
                    transform: translateX(-150%);
                    transition: all 0.9s 0.6s ease-in-out;
                }

                img {
                    transform: translateX(-150%);
                    transition: all 1.1s 0.4s ease-in-out;
                }
            }
        }

        &.forgotPassword {
            .auth_form {
                transition: all 1s ease-in-out;

                &.sign_in {
                    left: 50%;
                    opacity: 0;
                    pointer-events: none;
                }

                &.forgot_password {
                    top: 0;
                    opacity: 1;
                    pointer-events: initial;
                    transition-delay: 0;
                }

                &.otp_verify {
                    top: 0;
                    left: 50%;
                    opacity: 0;
                    pointer-events: none;
                    transition-delay: 0;
                }
            }
        }

        &.verifyOtp {
            .auth_form {
                transition: all 1s ease-in-out;

                &.sign_in {
                    left: 50%;
                    opacity: 0;
                    pointer-events: none;
                }

                &.forgot_password {
                    top: 50%;
                    opacity: 0;
                    pointer-events: none;
                    transition-delay: 0;
                }

                &.otp_verify {
                    top: 0;
                    left: 70px;
                    opacity: 1;
                    pointer-events: initial;
                    transition-delay: 0;
                }

                &.change_password {
                    top: 50%;
                    opacity: 0;
                    pointer-events: none;
                    transition-delay: 0;
                }
            }
        }

        &.changePassword {
            .auth_form {
                transition: all 1s ease-in-out;

                &.sign_in {
                    left: 50%;
                    opacity: 0;
                    pointer-events: none;
                }

                &.otp_verify {
                    top: 0;
                    left: 50%;
                    opacity: 0;
                    pointer-events: none;
                    transition-delay: 0;
                }

                &.change_password {
                    top: 0;
                    opacity: 1;
                    pointer-events: initial;
                    transition-delay: 0;
                }
            }
        }
    }

    &.signup {
        &::before {
            left: 55%;
            transform: translate(-100%, -50%);
            transition: all 1.8s ease-in-out;
        }

        .auth_form {
            transition: all 1s ease-in-out;

            &.sign_in {
                left: 50%;
                opacity: 0;
                pointer-events: none;
            }

            &.sign_up {
                right: 70px;
                opacity: 1;
                pointer-events: initial;
            }

            &.otp_verify {
                top: 50%;
                right: 70px;
                opacity: 0;
                pointer-events: none;
                transition-delay: 0;
            }
        }

        .panel_content {
            &.right {
                pointer-events: none;

                .panel_items {
                    transform: translateX(150%);
                    transition: all 0.9s 0.6s ease-in-out;
                }

                img {
                    transform: translateX(150%);
                    transition: all 1.1s 0.4s ease-in-out;
                }
            }

            &.left {
                pointer-events: initial;

                .panel_items {
                    transform: translateX(0);
                    transition: all 0.9s 0.6s ease-in-out;
                }

                img {
                    transform: translateX(0);
                    transition: all 1.1s 0.4s ease-in-out;
                }
            }
        }

        &.verifyOtp {
            .auth_form {
                transition: all 1s ease-in-out;

                &.sign_in {
                    left: 50%;
                    opacity: 0;
                    pointer-events: none;
                }

                &.sign_up {
                    right: 50%;
                    opacity: 0;
                    pointer-events: none;
                }

                &.otp_verify {
                    top: 0;
                    right: 70px;
                    opacity: 1;
                    pointer-events: initial;
                    transition-delay: 0;
                }
            }
        }
    }
`;