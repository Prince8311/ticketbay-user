import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ContactUsPageWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;

    .page_content {
        position: relative;
        width: 1320px;
        display: flex;
        flex-direction: column;

        .page_items {
            position: relative;
            margin-top: 5px;
            width: 100%;
            display: flex;

            .left_part {
                position: relative;
                width: 450px;
                padding-right: 40px;
                display: flex;
                flex-direction: column;

                h3 {
                    position: relative;
                    font-family: "Oleo Script", system-ui;
                    font-size: 25px;
                    line-height: 1;
                    color: ${colors.customColors.blackColor1};
                }

                ul {
                    position: relative;
                    margin-top: 25px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    li {
                        position: relative;
                        list-style: none;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-bottom: 5px;

                        i {
                            position: relative;
                            font-size: 13px;
                            color: ${colors.themeColor};
                        }

                        span {
                            position: relative;
                            margin-left: 5px;
                            font-size: 14px;
                            font-weight: 700;
                            font-family: "SUSE", sans-serif;
                            color: ${colors.customColors.blackColor};
                        }

                        p {
                            position: relative;
                            margin-left: 6px;
                            font-size: 13px;
                            font-weight: 500;
                            letter-spacing: 0.33px;
                            color: ${colors.customColors.blackColor1};
                        }
                    }
                }

                .address_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .address_box {
                        position: relative;
                        width: 100%;
                        margin-top: 13px;
                        display: flex;
                        flex-direction: column;

                        h5 {
                            position: relative;
                            width: max-content;
                            font-family: "SUSE", sans-serif;
                            font-size: 15px;
                            color: ${colors.customColors.blackColor};

                            &::before {
                                content: '';
                                position: absolute;
                                bottom: -2px;
                                left: 0;
                                width: 100%;
                                height: 2px;
                                background: linear-gradient(to right, ${colors.customColors.whiteColor}, ${colors.themeColor});
                            }
                        }
                        
                        p {
                            position: relative;
                            margin-top: 10px;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor1};
                        }
                    }
                }
            }

            .right_part {
                position: relative;
                width: calc(100% - 450px);
                padding-left: 50px;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 1px;
                    height: 100%;
                    background: linear-gradient(to bottom, ${colors.customColors.borderColor1}, ${colors.customColors.whiteColor});
                }

                .sec_head {
                    position: relative;
                    width: 100%;

                    h4 {
                        position: relative;
                        width: max-content;
                        display: flex;
                        font-family: "Oleo Script",system-ui;
                        font-size: 24px;
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
                            margin-right: 6px;
                            text-transform: uppercase;
                            font-size: 14px;
                            font-weight: 800;
                            font-style: italic;
                            color: ${colors.customColors.blackColor1};

                            b {
                                font-weight: 600;
                                font-size: 20px;
                            }
                        }
                    }
                }

                .sec_form {
                    position: relative;
                    margin-top: 35px;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    .input_box {
                        position: relative;
                        margin-bottom: 20px;

                        &.type1 {
                            width: 100%;
                        }

                        &.type2 {
                            width: 48.5%;
                        }

                        input {
                            position: relative;
                            width: 100%;
                            height: 40px;
                            border: 1px solid ${colors.customColors.borderColor};
                            font-size: 12px;
                            border-radius: 5px;
                            padding: 5px 20px;
                            padding-right: 60px;
                            outline: none;
                            transition: all 0.5s ease;

                            &:focus,
                            &:valid {
                                border: 1px solid ${colors.customColors.blueColor};
                                transition: all 0.5s ease;
                            }
                        }

                        textarea {
                            position: relative;
                            width: 100%;
                            height: 100px;
                            border: 1px solid ${colors.customColors.borderColor};
                            font-size: 12px;
                            border-radius: 5px;
                            padding: 5px 20px;
                            padding-right: 60px;
                            outline: none;
                            resize: none;
                            transition: all 0.5s ease;

                            &:focus,
                            &:valid {
                                border: 1px solid ${colors.customColors.blueColor};
                                transition: all 0.5s ease;
                            }
                        }

                        span {
                            position: absolute;
                            top: 20px;
                            left: 15px;
                            padding: 0 5px;
                            font-size: 12px;
                            background: ${colors.customColors.whiteColor};
                            line-height: 1;
                            color: ${colors.customColors.blackColor2};
                            pointer-events: none;
                            transform: translateY(-50%);
                            transition: all 0.5s ease;
                        }

                        input:focus ~ span,
                        input:valid ~ span,
                        textarea:focus ~ span,
                        textarea:valid ~ span {
                            transform: translateY(-25px);
                            font-size: 10px;
                            color: ${colors.themeColor};
                            font-weight: 500;
                            transition: all 0.5s ease;
                        }
                    }

                    .form_btn {
                        position: relative;
                        width: 100%;
                        margin-top: 10px;

                        button {
                            position: relative;
                            width: 135px;
                            height: 40px;
                            border: none;
                            cursor: pointer;
                            background: ${colors.customColors.blueColor};
                            font-size: 13px;
                            border-radius: 5px;
                            color: ${colors.customColors.whiteColor};
                            font-weight: 500;
                            transition: all 0.5s ease;
                            
                            i {
                                font-size: 12px;
                                margin-left: 2px;
                            }
                            
                            &:hover {
                                border-radius: 25px;
                                transition: all 0.5s ease;
                            }
                        }
                    }
                }
            }
        }
    }
`;