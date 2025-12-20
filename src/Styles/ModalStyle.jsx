import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const EditProfileWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;
    }

    .modal_box {
        position: relative;
        width: 450px;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translateY(-150px);
        transition: transform 0.8s ease;

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_head {
            position: relative;
            width: 100%;
            padding: 13px 25px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                font-size: 14px;
                line-height: 1;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
            }

            a {
                position: relative;
                margin-left: auto;
                font-size: 15px;
                color: ${colors.customColors.blackColor1};
                cursor: pointer;
            }
        }

        .modal_form {
            position: relative;
            width: 100%;
            max-height: calc(100% - 50px);
            padding-top: 25px;
            padding-bottom: 15px;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            form {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                padding: 0px 20px;
                padding-bottom: 10px;

                .input_box {
                    position: relative;
                    width: 100%;
                    margin-bottom: 20px;

                    input {
                        position: relative;
                        width: 100%;
                        height: 40px;
                        border: 1px solid ${colors.customColors.borderColor};
                        font-size: 12px;
                        border-radius: 5px;
                        padding: 5px 20px;
                        outline: none;
                        transition: all 0.5s ease;

                        &:focus,
                        &:valid {
                            border: 1px solid ${colors.customColors.blueColor};
                            transition: all 0.5s ease;
                        }
                    }

                    span {
                        position: absolute;
                        top: 50%;
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
                    input:valid ~ span {
                        transform: translateY(-25px);
                        font-size: 10px;
                        color: ${colors.themeColor};
                        font-weight: 500;
                        transition: all 0.5s ease;
                    }
                }
                
                .form_btn {
                    position: relative;
                    margin-top: 20px;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;

                    button {
                        position: relative;
                        width: 150px;
                        height: 40px;
                        background: ${colors.customColors.greenColor};
                        border: none;
                        font-size: 13px;
                        font-weight: 500;
                        color: ${colors.customColors.whiteColor};
                        cursor: pointer;
                        border-radius: 5px;
                        pointer-events: initial;
                        transition: all 0.5s ease;

                        &:hover {
                            border-radius: 30px;
                            letter-spacing: 1px;
                            transition: all 0.5s ease;
                        }
                    }
                }
            }
        }
    }
`;

export const LocationWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    z-index: 1000;
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;
    }

    .modal_box {
        position: relative;
        width: 450px;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translateY(0);
        transition: transform 0.8s ease;

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_head {
            position: relative;
            width: 100%;
            padding: 13px 25px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                font-size: 14px;
                line-height: 1;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
            }

            a {
                position: relative;
                margin-left: auto;
                font-size: 15px;
                color: ${colors.customColors.blackColor1};
                cursor: pointer;
            }
        }

        .modal_form {
            position: relative;
            width: 100%;
            max-height: calc(100% - 50px);
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            .search_sec {
                position: relative;
                width: 100%;
                display: flex;
                padding: 20px;

                .search_inner {
                    position: relative;
                    width: 100%;
                    height: 40px;
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
                        width: 100%;
                        height: 100%;
                        border: none;
                        outline: none;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor1};
                        transition: all 0.3s ease;
                    }
                }

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, #fff, #b1b1b1, #fff);
                }
            }
            
            .city_section {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                padding: 10px;

                .city_box {
                    position: relative;
                    width: 25%;
                    padding: 5px;
                    display: flex;

                    .box_inner {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border: 1px solid ${colors.customColors.blackColor3};
                        border-radius: 6px;
                        padding: 15px;
                        padding-bottom: 10px;
                        cursor: pointer;
                        transition: all 0.3s ease;

                        i {
                            font-size: 22px;
                            color: ${colors.customColors.blackColor1};
                        }
                        
                        p {
                            margin-top: 10px;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor1};
                        }

                        &:hover {
                            border-color: transparent;
                            box-shadow: 0 4px 8px ${colors.boxShadowColors.shadowColor3};
                            transition: all 0.3s ease;
                        }
                    }
                }
            }
        }
    }
`;