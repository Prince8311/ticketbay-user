import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const PageWrapper = styled('div')`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${colors.customColors.whiteColor};

    &.no_scroll {
        height: 100vh;
        overflow-y: hidden;
    }

    .top_section {
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 999;
    }

    .body_section {
        position: relative;
        width: 100%;
        margin-bottom: 15px;
    }

    .bottom_section {
        position: relative;
        width: 100%;
        margin-top: auto;
    }
`;

export const NavbarWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${colors.customColors.whiteColor};
    border-bottom: 1px solid ${colors.customColors.borderColor};
    transition: all 0.6s ease;

    .nav_inner {
        position: relative;
        width: 1320px;
        display: flex;
        flex-direction: column;

        .top_part {
            position: relative;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;

            .logo {
                position: relative;
                height: 100%;
                display: flex;
                padding: 8px 0;

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
                padding: 8px 0;

                .search_sec_inner {
                    position: relative;
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
            }

            .scrolled_items {
                position: relative;
                margin-left: auto;
                height: 100%;
                display: flex;
                align-items: center;
                padding: 8px 0;
                overflow: hidden;

                li {
                    position: relative;
                    height: 100%;
                    list-style: none;
                    margin: 0 5px;
                    transform: translateY(50px);
                    transition: transform 0.5s ease;
                    transition-delay: calc(var(--i) * 0.1s);

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
                                bottom: -8px;
                                width: 100%;
                                height: 3px;
                                background: ${colors.themeColor};
                                border-radius: 20px 20px 0 0;
                            }

                            &::before {
                                content: '';
                                position: absolute;
                                left: 50%;
                                bottom: -15px;
                                width: 0;
                                height: 0;
                                border-right: 11px solid transparent;
                                border-top: 11px solid ${colors.themeColor};
                                transform: rotate(45deg) translateX(-50%);
                            }
                        }
                    }
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
                    max-width: 100px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            .auth_sec {
                position: relative;
                margin-left: 30px;
                height: 100%;
                padding: 8px 0;
                
                .auth_btn {
                    position: relative;
                    height: 100%;

                    a {
                        position: relative;
                        width: 100px;
                        height: 100%;
                        cursor: pointer;
                        text-decoration: none;
                        background: ${colors.themeColor};
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
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

                .profile {
                    position: relative;

                    .profile_btn {
                        position: relative;
                        display: flex;
                        align-items: center;
                        cursor: pointer;

                        img {
                            position: relative;
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            object-fit: cover;
                        }

                        p {
                            position: relative;
                            margin-left: 8px;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor1};
                            max-width: 100px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        i {
                            position: relative;
                            color: ${colors.customColors.blackColor1};
                            font-size: 12px;
                            margin-left: 4px;
                            transition: all 0.5s ease;
                            
                            &.active {
                                transform: rotate(-180deg);
                                transition: all 0.5s ease;
                            }
                        }
                    }

                    .profile_dropdown {
                        position: absolute;
                        top: 40px;
                        left: 0;
                        width: 100%;
                        max-height: 0;
                        border-radius: 6px;
                        overflow: hidden;
                        z-index: 99;
                        background: ${colors.customColors.whiteColor};
                        box-shadow: 5px 6px 10px ${colors.boxShadowColors.shadowColor1},
                                    -2px -2px 4px ${colors.boxShadowColors.shadowColor2};
                        transition: all 0.5s ease;
                        
                        &.active {
                            max-height: 300px;
                            transition: all 0.5s ease;
                        }

                        .dropdown_inner {
                            position: relative;
                            width: 100%;
                            padding: 2px 10px;

                            ul {
                                position: relative;
                                width: 100%;
                                display: flex;
                                flex-direction: column;

                                a {
                                    position: relative;
                                    width: 100%;
                                    padding: 10px 0;
                                    text-decoration: none;
                                    display: flex;
                                    align-items: center;
                                    font-size: 13px;
                                    color: ${colors.customColors.blackColor2};
                                    cursor: pointer;
                                    border-bottom: 1px solid ${colors.customColors.borderColor};
                                    transition: all 0.5s ease;

                                    &:last-of-type {
                                        border-bottom: none;
                                    }
                                    
                                    i {
                                        position: relative;
                                        width: 25px;
                                        font-size: 14px;
                                    }
                                    
                                    &:hover {
                                        color: ${colors.customColors.blackColor1};
                                        transition: all 0.5s ease;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .bottom_part {
            position: relative;
            width: 100%;
            height: 40px;
            overflow: hidden;
            transition: height 0.6s ease;

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

                            &::before {
                                content: '';
                                position: absolute;
                                left: 50%;
                                bottom: -3px;
                                width: 0;
                                height: 0;
                                border-right: 7px solid transparent;
                                border-top: 7px solid ${colors.themeColor};
                                transform: rotate(45deg) translateX(-50%);
                            }
                        }
                    }
                }
            }
        }
    }

    &.scrolled {
        box-shadow: 0 10px 20px ${colors.boxShadowColors.shadowColor1};
        border-bottom: none;
        .nav_inner {
            .top_part {
                .search_sec input {
                    width: 270px;
                    transition: width 0.5s ease;
                }
                .scrolled_items li {
                    transform: translateY(0);
                    transition: transform 0.5s ease;
                    transition-delay: calc(var(--i) * 0.1s);
                }
            }
            .bottom_part {
                height: 0;
                transition: height 0.6s ease;
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