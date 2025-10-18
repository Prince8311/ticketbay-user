import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const PageWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${colors.customColors.whiteColor};

    .top_section {
        position: relative;
        width: 100%;
    }

    .body_section {
        position: relative;
        width: 100%;
    }

    .bottom_section {
        position: relative;
        width: 100%;
        margin-top: 15px;
    }
`;

export const NavbarWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${colors.customColors.borderColor};

    .nav_inner {
        position: relative;
        width: 1320px;
        display: flex;
        flex-direction: column;

        .top_part {
            position: relative;
            width: 100%;
            height: 50px;
            padding: 8px 0;
            display: flex;
            align-items: center;

            .logo {
                position: relative;
                height: 100%;
                display: flex;

                img {
                    position: relative;
                    height: 100%;
                    width: auto;
                }
            }

            .search_sec {
                position: relative;
                margin-left: 20px;
                height: 100%;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                padding: 5px 0;
                padding-right: 15px;
                display: flex;

                i {
                    position: relative;
                    width: 40px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    border-right: 1px solid ${colors.customColors.borderColor};
                    color: ${colors.customColors.blackColor3};
                }

                input {
                    position: relative;
                    margin-left: 20px;
                    width: 300px;
                    height: 100%;
                    border: none;
                    outline: none;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                    transition: all 0.3s ease;
                }
            }

            .location_sec {
                position: relative;
                margin-left: auto;
                display: flex;
                align-items: center;
                cursor: pointer;

                i {
                    position: relative;
                    color: ${colors.customColors.blackColor1};

                    &:first-child {
                        font-size: 13px;
                        padding-bottom: 3px;
                    }
                    &:last-child {
                        font-size: 12px;
                    }
                }

                p {
                    position: relative;
                    font-size: 13px;
                    margin-left: 5px;
                    margin-right: 3px;
                }
            }

            .auth_sec {
                position: relative;
                margin-left: 25px;
                height: 100%;

                .auth_btn {
                    position: relative;
                    height: 100%;

                    button {
                        position: relative;
                        width: 100px;
                        height: 100%;
                        cursor: pointer;
                        border: none;
                        background: ${colors.themeColor};
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 500;
                        color: ${colors.customColors.whiteColor};
                        transition: all 0.5s ease;

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.5s ease;
                        }
                    }
                }
            }
        }

        .bottom_part {
            position: relative;
            width: 100%;
            height: 40px;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: linear-gradient(to right, ${colors.customColors.whiteColor}, ${colors.customColors.borderColor}, ${colors.customColors.whiteColor});
            }

            .nav_items {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                li {
                    position: relative;
                    height: 100%;
                    list-style: none;
                    margin: 0 5px;

                    a {
                        position: relative;
                        height: 100%;
                        padding: 0 20px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        text-decoration: none;
                        font-size: 14px;
                        color: ${colors.customColors.blackColor1};
                        transition: all 0.5s ease;
                        
                        &:hover {
                            color: ${colors.customColors.blackColor};
                            transition: all 0.5s ease;
                        }

                        &.active {
                            color: ${colors.customColors.blackColor};

                            &::after {
                                content: '';
                                position: absolute;
                                left: 0;
                                bottom: 0;
                                width: 100%;
                                height: 3px;
                                background: ${colors.themeColor};
                                border-radius: 20px 20px 0 0;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const FooterWrapper = styled('div')`
    position: relative;
    width: 100%;
    background: ${colors.customColors.blackColor1};
    display: flex;
    flex-direction: column;

    .footer_top {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;

        .top_inner {
            position: relative;
            width: 1320px;
            display: flex;

            .about_box {
                position: relative;
                width: 30%;
                padding-right: 20px;
                display: flex;
                flex-direction: column;

                p {
                    position: relative;
                    font-size: 13px;
                    line-height: 1.5;
                    color: ${colors.customColors.whiteColor};
                }
                
                span {
                    position: relative;
                    margin-top: 25px;
                    font-size: 11px;
                    color: ${colors.customColors.whiteColor};
                    opacity: 0.8;
                }

                .btn_sec {
                    position: relative;
                    width: 100%;
                    margin-top: 8px;
                    display: flex;

                    a {
                        position: relative;
                        display: flex;
                        cursor: pointer;
                        text-decoration: none;

                        img {
                            position: relative;
                            height: 30px;
                            width: auto;
                        }
                    }
                }
            }

            .link_box {
                position: relative;
                width: 20%;
                padding: 0 20px;
                display: flex;
                flex-direction: column;

                h5 {
                    position: relative;
                    width: max-content;
                    font-size: 14px;
                    font-weight: 600;
                    color: ${colors.customColors.whiteColor};
                    font-style: italic;

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        border-radius: 25px;
                        background: linear-gradient(to right, transparent, ${colors.themeColor});
                    }
                }

                ul {
                    position: relative;
                    margin-top: 23px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    li {
                        position: relative;
                        width: 100%;
                        list-style: none;
                        margin-bottom: 10px;

                        &:last-of-type {
                            margin-bottom: 0;
                        }

                        a {
                            position: relative;
                            width: 100%;
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            color: ${colors.customColors.whiteColor};
                            opacity: 0.7;
                            transition: all 0.5s ease;

                            i {
                                font-size: 12px;
                            }

                            span {
                                font-size: 13px;
                                margin-left: 6px;
                                transition: all 0.5s ease;
                            }

                            &:hover {
                                opacity: 1;
                                transition: all 0.5s ease;

                                span {
                                    margin-left: 15px;
                                    transition: all 0.5s ease;
                                }
                            }
                        }
                    }
                }
            }

            .subscribe_box {
                position: relative;
                width: 30%;
                padding-left: 20px;
                display: flex;
                flex-direction: column;

                h5 {
                    position: relative;
                    width: max-content;
                    font-size: 14px;
                    font-weight: 600;
                    color: ${colors.customColors.whiteColor};
                    font-style: italic;

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        border-radius: 25px;
                        background: linear-gradient(to right, transparent, ${colors.themeColor});
                    }
                }

                p {
                    position: relative;
                    margin-top: 20px;
                    font-size: 12px;
                    color: ${colors.customColors.whiteColor};
                    opacity: 0.8;
                }

                .subscribe_sec {
                    position: relative;
                    margin-top: 8px;
                    width: 100%;
                    height: 40px;
                    border-radius: 6px;
                    background: ${colors.customColors.lightBackground1};
                    display: flex;
                    padding: 5px;

                    input {
                        position: relative;
                        width: calc(100% - 110px);
                        height: 100%;
                        border: none;
                        background: transparent;
                        outline: none;
                        padding: 0 15px;
                        font-size: 12px;
                        color: ${colors.customColors.whiteColor};
                    }

                    button {
                        position: relative;
                        width: 110px;
                        height: 100%;
                        border: none;
                        background: ${colors.themeColor};
                        color: ${colors.customColors.whiteColor};
                        font-size: 12px;
                        letter-spacing: 0.44px;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                }

                .social_media {
                    position: relative;
                    width: 100%;
                    margin-top: 25px;
                    display: flex;
                    align-items: center;

                    a {
                        position: relative;
                        width: 35px;
                        height: 35px;
                        background: ${colors.customColors.lightBackground1};
                        color: ${colors.customColors.whiteColor1};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 15px;
                        border-radius: 8px;
                        font-size: 15px;
                        cursor: pointer;
                        transition: all 0.5s ease;
                        
                        i {
                            opacity: 0.6;
                            transition: all 0.5s ease;
                        }

                        &:hover {
                            color: ${colors.customColors.blackColor1};
                            background: ${colors.customColors.whiteColor1};
                            transition: all 0.5s ease;
                            
                            i {
                                opacity: 1;
                                transition: all 0.5s ease;
                            }
                        }
                    }
                }
            }
        }
    }

    .footer_bottom {
        position: relative;
        width: 100%;
        padding: 15px 0;
        display: flex;
        justify-content: center;
        text-align: center;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(to right, transparent, ${colors.customColors.borderColor}, transparent);
        }

        p {
            position: relative;
            font-size: 12px;
            color: ${colors.customColors.whiteColor1};

            span {
                font-size: 14px;
                margin-right: 2px;
                font-family: "Oleo Script", system-ui;
                color: ${colors.themeColor};
            }
        }
    }
`;