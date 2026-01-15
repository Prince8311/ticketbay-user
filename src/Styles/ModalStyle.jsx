import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ButtonLoaderWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center !important;

    svg {
        position: relative;
        width: 50px;
        height: 20px;

        rect {
            fill: ${colors.customColors.whiteColor};
        }
    }
`;

export const SkeletonBoxWrapper = styled('div')`
    position: relative;
    border-radius: 4px;
    background: ${colors.customColors.lightBackground3};
    animation: pulse 1.4s infinite ease-in-out;

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.4; }
        100% { opacity: 1; }
    }
`;

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
            padding: 13px 20px;
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
                justify-content: center;
                flex-wrap: wrap;
                padding: 0px 20px;
                padding-bottom: 10px;

                .image_box {
                    position: relative;
                    width: 120px;
                    height: 120px;
                    border: 2px solid ${colors.customColors.borderColor};
                    border-radius: 50%;
                    padding: 5px;
                    margin-bottom: 10px;

                    .box_inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        display: flex;
                        overflow: hidden;

                        img {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }

                    }

                    a {
                        position: absolute;
                        bottom: 1px;
                        right: 5px;
                        width: 27px;
                        height: 27px;
                        background: ${colors.customColors.blueColor};
                        color: ${colors.customColors.whiteColor};
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 6px;
                        text-decoration: none;
                        font-size: 13px;
                    }
                }

                .input_box {
                    position: relative;
                    width: 100%;
                    margin-top: 17px;

                    input {
                        position: relative;
                        width: 100%;
                        height: 37px;
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
 
                .verify_sec {
                    position: relative;
                    margin-top: 8px;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 5px;

                    a {
                        position: relative;
                        text-decoration: none;
                        font-size: 11px;
                        font-weight: 500;
                        color: ${colors.customColors.blueColor};
                        cursor: pointer;
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

export const MovieTrailerWrapper = styled('div')`
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
        width: 550px;
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
            padding: 13px 20px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                line-height: 1;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .close_sec {
                position: relative;
                margin-left: auto;
                width: 40px;
                display: flex;
                justify-content: flex-end;

                a {
                    position: relative;
                    margin-left: auto;
                    font-size: 15px;
                    color: ${colors.customColors.blackColor1};
                    cursor: pointer;
                }
            }
        }

        .modal_video {
            position: relative;
            width: 100%;
            height: 325px;
            display: flex;
            padding: 20px;

            iframe {
                position: relative;
                width: 100%;
                height: 100%;
                border-radius: 6px;
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
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;

        &.no_location_selected {
            background: ${colors.customColors.lightBackground1};
            backdrop-filter: blur(15px);
        }
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
        transform: translateY(-100px);
        transition: transform 0.8s ease;

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_head {
            position: relative;
            width: 100%;
            padding: 12px 20px;
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
                padding: 15px 20px;

                .search_inner {
                    position: relative;
                    width: 100%;
                    height: 35px;
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
                        width: calc(100% - 40px);
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
                padding: 10px 15px 15px;

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
                        transition: all 0.5s ease;

                        i {
                            font-size: 22px;
                            color: ${colors.customColors.blackColor1};
                            transition: all 0.5s ease;
                        }
                        
                        p {
                            margin-top: 10px;
                            font-size: 11px;
                            word-break: break-all;
                            text-align: center;
                            line-height: 1.2;
                            color: ${colors.customColors.blackColor1};
                            transition: all 0.5s ease;
                        }

                        &.selected {
                            border: 1px solid ${colors.themeColor};
                            background: ${colors.themeColor};
                            pointer-events: none;

                            i {
                                color: ${colors.customColors.whiteColor};
                            }
                            
                            p {
                                color: ${colors.customColors.whiteColor};
                            }

                            &:hover {
                                border: 1px solid ${colors.themeColor};
                                background: ${colors.themeColor};
                                box-shadow: none;

                                i {
                                    color: ${colors.customColors.whiteColor};
                                }
                                
                                p {
                                    color: ${colors.customColors.whiteColor};
                                }
                            }
                        }

                        &:hover {
                            border-color: transparent;
                            box-shadow: 4px 4px 8px ${colors.boxShadowColors.shadowColor1},
                                        -2px -2px 5px ${colors.boxShadowColors.shadowColor1};
                            transition: all 0.5s ease;

                            i {
                                color: ${colors.customColors.blueColor};
                                transition: all 0.5s ease;
                            }

                            p {
                                color: ${colors.customColors.blueColor};
                                transition: all 0.5s ease;
                            }
                        }
                    }
                }

                .empty_city {
                    position: relative;
                    width: 100%;
                    padding: 20px 0;
                    display: flex;
                    justify-content: center;

                    p {
                        position: relative;
                        font-size: 14px;
                        font-style: oblique;
                        color: ${colors.customColors.whiteColor2};
                    }
                }
            }
        }
    }
`;

export const MovieFilterWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .sec_head {
        position: relative;
        width: 100%;
        padding: 0 15px;

        h5 {
            position: relative;
            width: 100%;
            font-family: "Oleo Script",system-ui;
            font-size: 18px;
            font-weight: 600;
            color: ${colors.themeColor};
            padding-bottom: 4px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
        }
    }

    .filter_items_sec {
        position: relative;
        margin-top: 10px;
        width: 100%;
        height: calc(100% - 40px);
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        padding-top: 10px;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        .filter_item_box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            background: ${colors.customColors.whiteColor};
            border: 1px solid ${colors.customColors.whiteColor2};
            border-radius: 6px;
            box-shadow: 5px 5px 8px ${colors.boxShadowColors.shadowColor2},
                        -3px -3px 5px ${colors.boxShadowColors.shadowColor2};
            margin-bottom: 15px;

            .box_head {
                position: relative;
                width: 100%;
                height: 40px;
                padding: 0 16px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid ${colors.customColors.borderColor};

                p {
                    position: relative;
                    font-size: 13px;
                    font-weight: 500;
                    font-style: italic;
                    color: ${colors.customColors.blackColor1};
                }

                a {
                    position: relative;
                    margin-left: auto;
                    font-size: 12px;
                    font-weight: 500;
                    cursor: pointer;
                    color: ${colors.customColors.blueColor};
                    text-decoration: underline;
                }

                i {
                    position: relative;
                    margin-left: 10px;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor2};
                }
            }

            .box_content {
                position: relative;
                width: 100%;
                padding: 11px;
                display: flex;
                flex-wrap: wrap;

                li {
                    position: relative;
                    list-style: none;
                    padding: 3px;

                    input[type="checkbox"] {
                        display: none;
                    }

                    label {
                        position: relative;
                        padding: 5px 20px;
                        cursor: pointer;
                        font-size: 12px;
                        display: flex;
                        color: ${colors.customColors.blackColor2};
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 4px;
                    }
                }
            }
        }
    }
`;

export const SeatCapacityWrapper = styled('div')`
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
        padding: 25px 0;
        transform: translateY(-150px);
        transition: transform 0.8s ease;

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_inner {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            .modal_head {
                position: relative;
                width: 100%;
                padding: 0 20px;
                display: flex;
                align-items: center;
                justify-content: center;

                h4 {
                    position: relative;
                    font-size: 14px;
                    line-height: 1;
                    font-weight: 600;
                    font-style: italic;
                    color: ${colors.customColors.redColor};
                }
            }

            .modal_items {
                position: relative;
                width: 100%;
                margin-top: 24px;
                display: flex;
                flex-direction: column;

                .middle_part {
                    position: relative;
                    width: 100%;
                    padding-bottom: 11px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background: linear-gradient(to right, ${colors.customColors.whiteColor}, ${colors.customColors.blackColor3}, ${colors.customColors.whiteColor});
                    }

                    .icon_box {
                        position: relative;
                        display: flex;

                        img {
                            position: relative;
                            display: flex;
                            height: 85px;
                        }
                    }

                    .selection_btn_sec {
                        position: relative;
                        margin-top: 15px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;

                        a {
                            position: relative;
                            margin: 0px 5px;
                            cursor: pointer;
                            width: 22px;
                            height: 22px;
                            border: 1px solid ${colors.customColors.blueColor};
                            color: ${colors.customColors.blueColor};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 11px;
                            font-weight: 500;
                            border-radius: 50%;
                            transition: all 0.5s;

                            &:hover {
                                border: 1px solid ${colors.customColors.redColor};
                                background: ${colors.customColors.redColor};
                                color: ${colors.customColors.whiteColor};
                                transition: all 0.5s;
                            }

                            &.selected {
                                border: 1px solid ${colors.customColors.redColor};
                                background: ${colors.customColors.redColor};
                                color: ${colors.customColors.whiteColor};
                            }
                        }
                    }
                }

                .section_part {
                    position: relative;
                    width: 100%;
                    padding: 6px 0;

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background: linear-gradient(to right, ${colors.customColors.whiteColor}, ${colors.customColors.blackColor3}, ${colors.customColors.whiteColor});
                    }

                    .part_inner {
                        position: relative;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;

                        .section_btn {
                            position: relative;
                            padding: 5px;

                            .btn_inner {
                                position: relative;
                                padding: 6px 10px;
                                display: flex;
                                flex-direction: column;
                                border: 1px solid ${colors.customColors.blueColor};
                                border-radius: 6px;
                                cursor: pointer;
                                color: ${colors.customColors.blueColor};
                                text-align: center;
                                transition: all 0.5s;

                                &:hover {
                                    background: ${colors.customColors.blueColor};
                                    color: ${colors.customColors.whiteColor};
                                }

                                h5 {
                                    position: relative;
                                    font-size: 11px;
                                    font-weight: 500;
                                }

                                b {
                                    position: relative;
                                    margin: 0 5px;
                                    display: none;
                                }

                                span {
                                    position: relative;
                                    margin-top: 2px;
                                    font-size: 15px;
                                    font-weight: 500;
                                    font-style: italic;

                                    a {
                                        font-size: 12px;
                                    }
                                }

                                p {
                                    position: relative;
                                    font-size: 10px;
                                }
                            }

                            &.selected .btn_inner{
                                border: 1px solid ${colors.customColors.redColor};
                                background: ${colors.customColors.redColor};
                                color: ${colors.customColors.whiteColor};
                            }
                        }
                    }
                }

                .bottom_part {
                    position: relative;
                    width: 100%;
                    margin-top: 15px;
                    padding: 0px 45px;

                    button {
                        position: relative;
                        width: 100%;
                        height: 35px;
                        border: 1px solid ${colors.customColors.greenColor};
                        background: ${colors.customColors.greenColor};
                        color: ${colors.customColors.whiteColor};
                        font-size: 13px;
                        letter-spacing: 0.3px;
                        font-weight: 500;
                        border-radius: 6px;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.5s ease;
                        }
                    }
                }
            }
        }
    }
`;

export const TermsConditionWrapper = styled('div')`
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
        width: 550px;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translateY(-150px);
        transition: transform 0.8s ease;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_head {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                line-height: 1;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .close_sec {
                position: relative;
                margin-left: auto;
                width: 40px;
                display: flex;
                justify-content: flex-end;

                a {
                    position: relative;
                    margin-left: auto;
                    font-size: 15px;
                    color: ${colors.customColors.blackColor1};
                    cursor: pointer;
                }
            }
        }

        .modal_body {
            position: relative;
            width: 100%;
            padding: 13px 20px;

            .body_inner {
                position: relative;
                width: 100%;
                max-height: 300px;
                overflow: hidden;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                li {
                    position: relative;
                    width: 100%;
                    display: flex;
                    list-style: none;
                    margin-bottom: 10px;

                    span {
                        position: relative;
                        width: 20px;
                        height: 20px;
                        display: flex;
                        align-items: center;
                        font-weight: 500;
                        font-size: 13px;
                        color: ${colors.customColors.orangeColor};
                    }
                    p {
                        position: relative;
                        width: calc(100% - 20px);
                        display: flex;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor2};
                        line-height: 1.5;
                    }
                }
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid ${colors.customColors.borderColor};

            button {
                position: relative;
                width: 160px;
                height: 35px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                border-radius: 6px;
                overflow: hidden;
                border: none;
                background: ${colors.customColors.greenColor};
                color: ${colors.customColors.whiteColor};
                transition: all 0.5s ease;

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }
            }
        }
    }
`;

export const ReturnPolicyWrapper = styled('div')`
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
        width: 550px;
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
            padding: 13px 20px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                line-height: 1;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .close_sec {
                position: relative;
                margin-left: auto;
                width: 40px;
                display: flex;
                justify-content: flex-end;

                a {
                    position: relative;
                    margin-left: auto;
                    font-size: 15px;
                    color: ${colors.customColors.blackColor1};
                    cursor: pointer;
                }
            }
        }

        .modal_body {
            position: relative;
            width: 100%;
            padding: 13px 20px;

            .body_inner {
                position: relative;
                width: 100%;
                max-height: 300px;
                overflow: hidden;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                li {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    list-style: none;
                    margin-bottom: 10px;

                    b {
                        position: relative;
                        width: 100%;
                        font-weight: 500;
                        font-size: 12px;
                        color: ${colors.customColors.redColor};
                    }

                    h5 {
                        position: relative;
                        font-size: 14px;
                        font-weight: 500;
                        color: ${colors.customColors.greenColor};
                        margin-bottom: 10px;
                    }

                    span {
                        position: relative;
                        font-size: 12px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor2};
                        margin-bottom: 10px;
                    }

                    p {
                        position: relative;
                        width: 100%;
                        margin-bottom: 10px;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor2};
                        line-height: 1.5;
                        display: flex;

                        &:last-of-type {
                            margin-bottom: 0;

                            span {
                                font-weight: normal;
                                color: ${colors.customColors.blackColor2};

                                b {
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor2};
                                }
                            }
                        }

                        i {
                            position: relative;
                            height: 22px;
                            display: flex;
                            align-items: center;
                            font-size: 11px;
                            margin-right: 10px;
                            color: ${colors.customColors.orangeColor};
                        }

                        span {
                            margin-bottom: 0;
                            margin-right: 8px;
                            line-height: 1.5;
                        }

                        a {
                            font-size: 12px;
                            line-height: 1.5;
                            color: ${colors.customColors.blueColor};
                            text-decoration: none;
                        }
                    }
                }
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid ${colors.customColors.borderColor};

            button {
                position: relative;
                width: 160px;
                height: 35px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                border-radius: 6px;
                overflow: hidden;
                border: none;
                background: ${colors.customColors.greenColor};
                color: ${colors.customColors.whiteColor};
                transition: all 0.5s ease;

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }
            }
        }
    }
`;

export const CheckoutWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    border-top-left-radius: 10px;
    background: ${colors.customColors.whiteColor};
    box-shadow: -10px 5px 15px ${colors.boxShadowColors.shadowColor1};
    z-index: 1000;
    transition: all 0.6s ease;

    &.active {
        right: 0;
        transition: all 0.6s ease;
    }

    .modal_inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .modal_head {
            position: relative;
            width: 100%;
            height: 50px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            h4 {
                position: relative;
                font-size: 14px;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
            }

            a {
                position: relative;
                cursor: pointer;
                font-size: 16px;
                color: ${colors.customColors.blackColor1};
            }
        }

        .modal_body {
            position: relative;
            width: 100%;
            height: calc(100% - 116px);
            padding: 15px 0px;

            .body_inner {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                .checkout_items {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 5px 20px;

                    .movie_details_box {
                        position: relative;
                        width: 100%;
                        padding: 12px 16px;
                        background: ${colors.customColors.whiteColor};
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;
                        box-shadow: 5px 6px 10px ${colors.boxShadowColors.shadowColor2},
                                    -3px -3px 5px ${colors.boxShadowColors.shadowColor2};

                        h5 {
                            position: relative;
                            font-size: 13px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor};
                        }

                        li {
                            position: relative;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            list-style: none;
                            margin-top: 5px;

                            p {
                                position: relative;
                                line-height: 1;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};
                                margin-left: 5px;
                                padding-left: 5px;
                                border-left: 2px solid ${colors.customColors.blackColor3};

                                &:first-of-type {
                                    margin-left: 0;
                                    padding-left: 0;
                                    border-left: none;
                                }
                            }
                        }

                        span {
                            position: relative;
                            margin-top: 8px;
                            font-size: 13px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};

                            b {
                                font-weight: 500;
                            }
                        }
                    }

                    .ticket_details_box {
                        position: relative;
                        margin-top: 20px;
                        width: 100%;
                        padding: 12px 16px;
                        background: ${colors.customColors.whiteColor};
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;
                        box-shadow: 5px 6px 10px ${colors.boxShadowColors.shadowColor2},
                                    -3px -3px 5px ${colors.boxShadowColors.shadowColor2};

                        .ticket_seats {
                            position: relative;
                            width: 100%;
                            padding-bottom: 5px;
                            border-bottom: 1px solid ${colors.customColors.borderColor};

                            li {
                                position: relative;
                                width: 100%;
                                list-style: none;
                                word-break: break-word;
                                font-size: 13px;
                                color: ${colors.customColors.blackColor1};
                                
                                span {
                                    font-weight: 500;
                                    margin-right: 5px;
                                    color: ${colors.customColors.blackColor};
                                }
                            }
                        }

                        .ticket_details {
                            position: relative;
                            width: 100%;
                            margin-top: 10px;
                            display: flex;
                            flex-direction: column;

                            li {
                                position: relative;
                                list-style: none;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                
                                &.amounts {
                                    margin-bottom: 5px;
                                    span {
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor2};
                                    }
                                    
                                    a {
                                        margin-left: 5px;
                                        font-size: 12px;
                                        cursor: pointer;
                                        color: ${colors.customColors.blackColor2};

                                        i {
                                            position: relative;
                                            transition: all 0.5s ease;
                                            
                                            &.rotate {
                                                transform: rotate(-180deg);
                                                transition: all 0.5s ease;
                                            }
                                        }
                                    }

                                    p {
                                        margin-left: auto;
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor2};

                                        b {
                                            font-weight: 400;
                                            font-size: 11px;
                                        }
                                    }
                                }
                                
                                &.convenience {
                                    margin-bottom: 4px;

                                    &:first-of-type {
                                        margin-top: 5px;
                                    }

                                    span {
                                        font-size: 11px;
                                        color: ${colors.customColors.blackColor2};
                                    }

                                    p {
                                        margin-left: auto;
                                        font-size: 11px;
                                        color: ${colors.customColors.blackColor2};

                                        b {
                                            font-weight: 400;
                                            font-size: 10px;
                                        }
                                    }
                                }
                                
                                &.total {
                                    margin-top: 2px;
                                    padding-top: 5px;
                                    border-top: 1px dashed ${colors.customColors.borderColor1};
                                    span {
                                        font-size: 13px;
                                        font-weight: 500;
                                        color: ${colors.customColors.blackColor};
                                    }

                                    p {
                                        margin-left: auto;
                                        font-size: 13px;
                                        font-weight: 500;
                                        color: ${colors.customColors.blackColor};

                                        b {
                                            font-weight: 500;
                                            font-size: 12px;
                                        }
                                    }
                                }
                            }

                            .convenience_details {
                                position: relative;
                                width: 100%;
                                max-height: 0;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                transition: all 0.5s ease;
                                
                                &::before {
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 1px;
                                    background: ${colors.customColors.borderColor};
                                }
                                
                                &.active {
                                    max-height: 150px;
                                    transition: all 0.5s ease;
                                }
                            }
                        }
                    }

                    .account_box {
                        position: relative;
                        margin-top: 20px;
                        width: 100%;
                        padding: 12px 16px;
                        background: ${colors.customColors.whiteColor};
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;
                        box-shadow: 5px 6px 10px ${colors.boxShadowColors.shadowColor2},
                                    -3px -3px 5px ${colors.boxShadowColors.shadowColor2};

                        li {
                            position: relative;
                            width: 100%;
                            list-style: none;
                            display: flex;
                            flex-direction: column;
                            margin-bottom: 10px;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            span {
                                position: relative;
                                font-size: 13px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor};
                            }

                            p {
                                position: relative;
                                font-size: 12px;
                                margin-top: 2px;
                                color: ${colors.customColors.blackColor1};

                                a {
                                    color: ${colors.customColors.blueColor};
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            height: 66px;
            border-top: 1px solid ${colors.customColors.borderColor};
            padding: 15px 20px;
            display: flex;
            align-items: center;

            button {
                position: relative;
                width: 100%;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                padding: 0 25px;
                border-radius: 6px;
                overflow: hidden;
                border: none;
                background: ${colors.customColors.redColor};
                color: ${colors.customColors.whiteColor};
                transition: all 0.5s ease;

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }

                &.disable {
                    opacity: 0.4;
                }

                p {
                    position: relative;
                    font-size: 13px;
                    font-weight: 500;
                }

                span {
                    position: relative;
                    font-size: 13px;
                }
            }
        }
    }
`;